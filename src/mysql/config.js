{
    const config = {
      host: "127.0.0.1",
      port: 3306,
      user: "root",
      // password: "011218",
      database: "mydb",
      // multipleStatements: true
    };
  /* User for AWS config S3
    const accessKey = "xxxxxxxxxxxxxxxxxx";
    const secretKey = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
    const Bucket = "??????";
    const ACL = "public-read-write";
    const ContentType = "image/jpg";
  */
    module.exports = {
      config,
    };
  }