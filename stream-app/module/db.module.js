import mongoose from "mongoose";
const { NEXT_PUBLIC_DB_URL, NEXT_PUBLIC_DB_COLLECTION_NAME } = process.env;
mongoose.connect(`${NEXT_PUBLIC_DB_URL}${NEXT_PUBLIC_DB_COLLECTION_NAME}`);

export default mongoose;