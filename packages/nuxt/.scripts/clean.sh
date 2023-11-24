#!/bin/bash

cd "$(dirname "$0")/..";

rm -rf .nuxt/ dist/;

cd "playground";

rm -rf .nuxt/ .output/;
