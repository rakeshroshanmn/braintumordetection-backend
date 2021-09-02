const express = require("express");
const AWS = require("aws-sdk");
const cors = require("cors");
const app = express();
const port = process.env.port || 3000;
app.use(express.json());
app.use(cors());
app.post("/", function (req, res) {
  var rekognition = new AWS.Rekognition({
    region: "ap-south-1",
    accessKeyId: "AKIAVWQWMJSREWHMQKNI",
    secretAccessKey: "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",
  });
  var params = {
    Image: {
      S3Object: {
        Bucket: req.body.bucket,
        Name: req.body.key,
      },
    },
    ProjectVersionArn:
      "arn:aws:rekognition:ap-south-1:391962709154:project/braintumordetection/version/braintumordetection.2021-08-31T12.02.17/1630391537412" /* required */,
  };

  rekognition.detectCustomLabels(params, function (err, data) {
    if (err) console.log(err, err.stack);
    else res.send(data);
  });
});
app.get("/", function (req, res) {
  res.send("Hello Everyone");
});

app.listen(port, () => {
  console.log(`Server is up at ${port}`);
});
