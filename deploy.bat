rem uncomment to create a bucket
rem gsutil mb -c regional -l us-east1 gs://lumber-demo
call gsutil -m rm gs://lumber-demo/**
call gsutil -m rsync -r build gs://lumber-demo
call gsutil -m acl ch -r -u AllUsers:R gs://lumber-demo/**
call gsutil web set -m index.html -e index.html gs://lumber-demo
call gsutil setmeta -h "Cache-Control: no-cache" -r gs://lumber-demo/**
