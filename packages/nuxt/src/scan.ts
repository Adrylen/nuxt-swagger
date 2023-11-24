import { parseComments } from "dox";
import { readFileSync } from "fs";
import { globby } from "globby";
import { load } from "js-yaml";
import jsdocExtractor from "jsdoc-extractor";

const scanOpenApiPath = (filePath: string) => {
  const fileBuffer = readFileSync(filePath);

  const fileJsDoc = jsdocExtractor(fileBuffer).next();
  if (!fileJsDoc.value?.length) return null;

  const jsDoc = parseComments(fileJsDoc.value[0].toString());
  // console.log(jsDoc);
  if (!jsDoc.length) return null;

  const jsDocTags = jsDoc[0].tags;
  // console.log(jsDocTags);
  if (!jsDocTags.length) return null;

  const openApiJsDoc = jsDocTags.find((tag: { type: string }) => tag.type === "openapi");
  // console.log(openApiJsDoc);
  if (!openApiJsDoc?.string) return null;

  const openApiPath = load(openApiJsDoc.string);
  // console.log(openApiPath);
  // console.log(JSON.stringify(openApiPath));
  return openApiPath;
};

export const scanOpenApiPaths = async (serverDir: string): Promise<unknown> => {
  const allFilePaths = await globby(`${serverDir}/**/*.{js,mjs,cjs,ts,mts,cts,tsx,jsx}`, {});

  const openApiPaths = allFilePaths
    .reduce((aggregate: object, filePath: string) => {
      const path = scanOpenApiPath(filePath);
      return !path ? aggregate : { ...aggregate, ...path };
    }, {});

  return openApiPaths;
};
