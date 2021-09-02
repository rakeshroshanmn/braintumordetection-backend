const express = require("express");
// const AWS = require("aws-sdk");
const cors = require("cors");
const app = express();
const port = process.env.port || 3000;
app.use(express.json());
app.use(cors());
// app.post("/", function (req, res) {
//   var rekognition = new AWS.Rekognition({
//     region: "ap-south-1",
//     accessKeyId: "AKIAX4MFRFGGNCBMO5FC",
//     secretAccessKey: "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",
//   });
//   var params = {
//     Image: {
//       S3Object: {
//         Bucket: req.body.bucket,
//         Name: req.body.key,
//       },
//     },
//     ProjectVersionArn:
//       "arn:aws:rekognition:ap-south-1:541982796172:project/BraintumorDetection/version/BraintumorDetection.2021-09-02T14.27.07/1630573027056" /* required */,
//   };

//   rekognition.detectCustomLabels(params, function (err, data) {
//     if (err) console.log(err, err.stack);
//     else res.send(data);
//   });
// });
app.get("/", function (req, res) {
  res.send("Hello Everyone");
});

app.listen(port, () => {
  console.log(`Server is up at ${port}`);
});
