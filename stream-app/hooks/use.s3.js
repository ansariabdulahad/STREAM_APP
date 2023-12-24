import AWS from 'aws-sdk';

const { NEXT_PUBLIC_AWS_ACCESS_KEY_ID, NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY } = process.env;

const s3 = new AWS.S3({
    region: 'ap-south-1',
    accessKeyId: 'AKIAUSH2D7Q2SHTAUEFK',
    secretAccessKey: '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'
});

const Bucket = "stream-stores-app";

// FOR SINGLE FILE UPLOAD FUNCTION
// export const useS3 = (files) => {
//     const upload = async () => {
//         const options = {
//             Bucket,
//             Body: files.video,
//             Key: files.video.name
//         }

//         return s3.upload(options);
//     }
//     return upload;
// }

// FOR MULTIPLE FILE UPLOAD FUNCTION
export const useS3 = (file, key = file.name) => {
    const upload = async () => {
        const options = {
            Bucket,
            Body: file,
            Key: key
        }

        return s3.upload(options);
    }
    return upload;
}