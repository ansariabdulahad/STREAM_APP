import AWS from '../module/aws.module';

const s3 = new AWS.S3();
const options = {
    Bucket: 'stream-stores-app'
}

export const fetch = async (request) => {

    try {

        // options['Delimiter'] = '/'; // to avoid folder names only get files
        // options['Prefix'] = 'demo'; // to get only folder and that folder files

        const { searchParams } = new URL(request.url);
        let query = {};
        // console.log(searchParams.get('limit')); // get only one data parameter

        // to get all data parameters
        for (const [key, value] of searchParams) {
            query[key] = value;
        }

        options['MaxKeys'] = query.limit ? query.limit : null;
        options['Prefix'] = query.folder ? query.folder : null;
        const objects = await s3.listObjects(options).promise();

        return {
            data: {
                message: "FETCH S3 SUCCESSFUL",
                data: objects.Contents,
                query: query,
                options: options
            },
            status: 200
        }
    } catch (error) {
        return {
            data: {
                message: "FETCH S3 FAILED",
                error: error
            },
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

export const fetchById = async (request, params) => {
    const { keys } = params;
    const path = keys.join('/');

    options['Key'] = path;

    try {
        await s3.headObject(options).promise(); // it will check that file exists on s3 bucket which you are trying to make url.
        options['Expires'] = Date.now(); // 1703408605271
        const url = s3.getSignedUrl('getObject', options);

        return {
            data: {
                message: 'FATCH BY ID SUCCESSFUL',
                data: url,
                options: options
            },
            status: 200
        }

    } catch (error) {
        return {
            data: {
                message: 'FATCH BY ID FAILED',
                error: error
            },
            status: 404
        }
    }

    // return {
    //     data: path,
    //     status: 200
    // }
}

export const create = async (request) => {
    return {
        data: {
            message: "CREATE S3 POST REQUEST",
        },
        status: 200
    }
}

export const trash = async (request, params) => {

    const { keys } = params;
    const path = keys.join('/');
    options['Key'] = path;

    try {
        await s3.headObject(options).promise();
        await s3.deleteObject(options).promise();

        return {
            data: {
                message: "DELETE FROM S3 TRASH REQUEST",
                data: path
            },
            status: 200
        }
    } catch (error) {
        return {
            data: {
                message: "DELETE FROM S3 TRASH REQUEST FAILED",
                error: error
            },
            status: 424
        }
    }
}

export const update = async (request, params) => {
    const data = await request.json();

    return {
        data: {
            message: "UPDATE S3 REQUEST",
            data: data
        },
        status: 200
    }
}