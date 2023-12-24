import AWS from 'aws-sdk';

const { NEXT_PUBLIC_AWS_ACCESS_KEY_ID, NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY } = process.env;

const config = new AWS.Config();

config.update({
    region: 'ap-south-1',
    accessKeyId: NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY
});

export default AWS;