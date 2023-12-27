import AWS from 'aws-sdk';
import videoProcessing from '../module/video-proc.module';

const media = new AWS.MediaConvert({
    region: 'ap-south-1',
    endpoint: 'https://htunurlzb.mediaconvert.ap-south-1.amazonaws.com',
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY
})

export const fetch = async (request) => {

    const params = {
        // MaxResults: 2
    }

    try {
        // Media convert related code
        const jobs = await media.listJobs(params).promise();

        return {
            data: jobs,
            status: 200
        }
    } catch (error) {
        return {
            data: error,
            status: 424
        }
    }

    // return {
    //     data: {
    //         message: "FETCH S3 GET REQUEST",
    //     },
    //     status: 200
    // }
}

export const create = async (request) => {

    try {
        // MEDIA CONVERTER CODE USING AWS MEDIA CONVERTER
        const data = await request.json();
        let params = videoProcessing(data.key);
        params.Role = 'arn:aws:iam::314057161781:role/service-role/stream-app';
        const job = await media.createJob(params).promise(); // IT WILL CONVERT VIDEO ON AWS MEDIA CONVERTER

        return {
            data: job,
            status: 200
        }
    } catch (error) {
        return {
            data: error,
            status: 424
        }
    }

    // return {
    //     data: {
    //         message: "CREATE S3 POST REQUEST",
    //     },
    //     status: 200
    // }
}