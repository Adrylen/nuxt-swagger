#!/bin/bash

cd "$(dirname "$0")";

./clean.sh;

cd "..";

rm -rf node_modules/;

cd "playground";

rm -rf node_modules/;
