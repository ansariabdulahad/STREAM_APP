import { secureAdminMiddleware } from '../middleware/secure-admin-api-middleware';
import '../module/db.module';
import moviesSchema from '../schema/movies.schema';

export const fetch = async (request) => {

    try {
        // await secureAdminMiddleware(request); // Im using this middleware in main route instead of controller it is working fine
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
    } catch (error) {
        return {
            data: {
                message: "Invalid User"
            },
            status: 401
        }
    }
}

export const activeMovies = async (request) => {

    try {
        // await secureAdminMiddleware(request); // Im using this middleware in main route instead of controller it is working fine
        try {
            const { searchParams } = new URL(request.url);
            const skip = searchParams.get('skip');
            const movies = await moviesSchema.find({ active: true }).sort({ _id: -1 }).skip(skip ? skip : 0).limit(12);
            const total = await moviesSchema.countDocuments();

            if (movies.length > 0) {
                return {
                    data: {
                        movies,
                        total
                    },
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
    } catch (error) {
        return {
            data: {
                message: "Invalid User"
            },
            status: 401
        }
    }
}

export const latestMovies = async (request) => {
    try {
        // await secureAdminMiddleware(request); // Im using this middleware in main route instead of controller it is working fine
        try {
            const movies = await moviesSchema.find().sort({ _id: -1 }).limit(6);

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
    } catch (error) {
        return {
            data: {
                message: "Invalid User"
            },
            status: 401
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
        const response = await new moviesSchema(data).save();
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

export const makeMovieActive = async (request, params) => {
    try {
        const { id } = params;

        const updateRes = await moviesSchema.updateOne({ job_id: id }, { active: true }, { new: true });

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