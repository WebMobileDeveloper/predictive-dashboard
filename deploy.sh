#!/bin/sh
# uncomment to create a bucket
# gsutil mb -c regional -l us-east1 gs://lumber-demo && \
gsutil -m rm gs://lumber-demo/** && \
gsutil -m rsync -r build gs://lumber-demo && \
gsutil -m acl ch -r -u AllUsers:R gs://lumber-demo/** && \
gsutil web set -m index.html -e index.html gs://lumber-demo && \
gsutil setmeta -h "Cache-Control: no-cache" -r gs://lumber-demo/**
