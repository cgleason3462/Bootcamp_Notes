# A Note on the Databricks mount:

* For better compatibility with Databricks, files are downloaded using the `https` protocol in the Big Data unit  activities and homework assignment.

* However, it is possible to use the Databricks mount to retrieve datasets in Spark from your S3 bucket.

  * The URL is `https://s3.amazonaws.com/amazon-reviews-pds/tsv/amazon_reviews_us_Video_Games_v1_00.tsv.gz`

  * To access it with the Databricks mount, download the file and re-upload to your S3 bucket

* To read a file from your S3 bucket, first download and upload to S3

  * `**https://s3.amazonaws.com/**amazon-reviews-pds/tsv/amazon_reviews_us_Video_Games_v1_00.tsv.gz`

  * `/mnt/mnt_s3/Zamazon-reviews-pds/tsv/amazon_reviews_us_Video_Games_v1_00.tsv.gz`
  
    ```python
  video_games_df = spark.read.option("header", "true").csv("/mnt/mnt_s3/Zamazon-reviews-pds/tsv/amazon_reviews_us_Video_Games_v1_00.tsv.gz", inferSchema=True, sep="\t")
  ```
