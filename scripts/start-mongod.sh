#!/bin/bash

docker run --name mongo -p 27017:27017 -v "$HOME/.mongo/db":/data/db -d mongo