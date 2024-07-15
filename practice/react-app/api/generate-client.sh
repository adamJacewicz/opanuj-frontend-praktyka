#!/bin/bash

openapi-generator generate -i ./spec.yml -g typescript-fetch -o ../src/api


