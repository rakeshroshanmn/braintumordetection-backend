const express = require("express");
const AWS = require("aws-sdk");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.post("/", function (req, res) {
  var rekognition = new AWS.Rekognition({
    region: "ap-south-1",
    accessKeyId: "AKIAVWQWMJSREWHMQKNI",
    secretAccessKey: "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",
  });
  console.log(req.body.bucket)
  console.log(req.body.key)
  var params = {
    Image: {
      /* required */
      // Bytes: Buffer.from('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
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
    // an error occurred
    else res.send(data); // successful response
  });
});

// app.get('/', function (req, res) {
//     res.send('hello world')
//
// })
app.get('/',function(req,res){
 res.send("Hello Everyone")
})

app.listen(port, () => {
  console.log(`Server is up at ${port}`);
  //   var rekognition = new AWS.Rekognition({region:"ap-south-1", accessKeyId: "AKIAVWQWMJSREWHMQKNI",
  //   secretAccessKey: "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",});

  //   var params = {
  //     MinInferenceUnits: 1 /* required */,
  //     ProjectVersionArn:
  //       "arn:aws:rekognition:ap-south-1:391962709154:project/braintumordetection/version/braintumordetection.2021-08-31T12.02.17/1630391537412",
  //   };
  //   rekognition.startProjectVersion(params, function (err, data) {
  //     if (err) console.log(err, err.stack);
  //     // an error occurred
  //     else console.log(data); // successful response
  //   });
  //   var params = {
  //     Image: { /* required */
  //      // Bytes: Buffer.from('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
  //       S3Object: {
  //         Bucket: 'braintumorca4',
  //         Name: 'brain_tumor_dataset/yes/Y1714.jpg',
  //         Version: '8Hnvd5ARh5xdfNH4283HseMuBNDMDbht'
  //       }
  //     },
  //     ProjectVersionArn: 'arn:aws:rekognition:ap-south-1:391962709154:project/braintumordetection/version/braintumordetection.2021-08-31T12.02.17/1630391537412' /* required */
  //   };
  //   rekognition.detectCustomLabels(params, function(err, data) {
  //     if (err) console.log(err, err.stack); // an error occurred
  //     else     console.log(data);           // successful response
  //   });
});
