import '../module/db.module';
import moviesSchema from '../schema/movies.schema';

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