const {promisify} = require('es6-promisify');
const readdir = promisify(require('recursive-readdir'));
const fs = require('fs');
const readFile = promisify(fs.readFile);
const mime = require('mime-types');
const path = require('path');
const aws = require('aws-sdk');

const s3 = new aws.S3({apiVersion: '2006-03-01'});

const deleteObjects = promisify(s3.deleteObjects.bind(s3));
const listAllObjects = promisify(s3.listObjectsV2.bind(s3));
const putObject = promisify(s3.putObject.bind(s3));

let config;

try {
  config = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json')).toString());
} catch (error) {
  console.error('Could not read config.json file. Ensure you have created a config.json file using the ' +
    'config.example.json template');
  process.exit(1);
}


/**
 * Deploys the given data to the provided s3 bucket
 * @param { string } bucket
 * @param { array } deployFiles
 * @returns {Promise<*>}
 */
async function deployPublicFolder(bucket, deployFiles) {
  await Promise.all(deployFiles.map(async filePath => {
    const fileBuffer = await readFile(filePath);

    console.log(mime.lookup(filePath));

    return putObject({
      ACL: "public-read",
      ContentType: mime.lookup(filePath) || 'application/octet-stream',
      Bucket: bucket,
      Body: fileBuffer,
      Key: filePath.replace(path.join(__dirname, config.deployPath, '/'), '')
    });
  }));
}

async function main() {
  console.log('Deploying to ' + config.bucket + ' ...');
  console.log('Listing out existing files...');
  const objectData = await listAllObjects({Bucket: config.bucket});
  const objectArray = objectData.Contents.map(o => ({Key: o.Key}));

  console.log('Found ' + objectArray.length + ' previously existing files on the bucket.');
  if(objectArray.length > 0) {
    console.log('Clearing out old files...');
    await deleteObjects({Bucket: config.bucket, Delete: {Objects: objectArray}});
  }else {
    console.log('Continuing without clearing files...');
  }

  console.log('Uploading files to bucket...');
  const deployFiles = await readdir(path.join(__dirname, config.deployPath));
  console.time('uploadTime');
  await deployPublicFolder(config.bucket, deployFiles);
  console.timeEnd('uploadTime');
  console.log('Done! Deployed to ' + config.bucket);
}

main().catch(err => {
  console.error(err);
});
