#!/bin/bash

openapi-generator-cli generate -i ./spec.yml -g typescript-fetch -o ../src/api


