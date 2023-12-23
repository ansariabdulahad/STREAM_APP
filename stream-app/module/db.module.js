import mongoose from "mongoose";
const { DB_URL, DB_COLLECTION_NAME } = process.env;
mongoose.connect(`${DB_URL}${DB_COLLECTION_NAME}`);

export default mongoose;