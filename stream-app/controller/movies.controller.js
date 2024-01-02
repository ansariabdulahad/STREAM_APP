import '../module/db.module';
import moviesSchema from '../schema/movies.schema';

export const fetch = async (request) => {
    try {
        const movies = await moviesSchema.find();

        if (movies.length > 0) {
            return {
                data: movies,
                status: 200
            }
        }
        else {
            return {
                data: "No Data Found",
                status: 404
            }
        }

    } catch (error) {
        return {
            data: error,
            status: 424
        }
    }
}

export const fetchById = async (request, params) => {
    try {
        const { id } = params;

        const movie = await moviesSchema.findById(id);

        if (movie) {
            return {
                data: movie,
                status: 200
            }
        }
        else {
            return {
                data: "No Data Found",
                status: 404
            }
        }

    } catch (error) {
        return {
            data: error,
            status: 424
        }
    }
}

export const create = async (request) => {
    try {
        const data = await request.json();
        const response = await moviesSchema(data).save();
        return {
            data: response,
            status: 200
        }
    } catch (error) {
        return {
            data: error,
            status: 424
        }
    }
}

export const trash = async (request, params) => {
    try {
        const { id } = params;

        const deleteRes = await moviesSchema.findByIdAndDelete(id);

        return {
            data: deleteRes,
            status: 200
        }

    } catch (error) {
        return {
            data: error.message,
            status: 424
        }
    }
}

export const update = async (request, params) => {
    try {
        const { id } = params;
        const data = await request.json();

        const updateRes = await moviesSchema.findByIdAndUpdate(id, data, { new: true });

        return {
            data: updateRes,
            status: 200
        }

    } catch (error) {
        return {
            data: error.message,
            status: 424
        }
    }
}