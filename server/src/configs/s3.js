const AWS = require('aws-sdk');

// Configure the AWS SDK with your credentials and region
AWS.config.update({
    accessKeyId: 'ACCESS_KEY_ID',
    secretAccessKey: 'SECRET_ACCESS_KEY',
    region: 'REGION',
});

module.exports = {
    s3: new AWS.S3(),
    inventoryBucket: 'ghg_inventory'
};