import mongoose from "mongoose";
const { NEXT_PUBLIC_DB_URL, NEXT_PUBLIC_DB_COLLECTION_NAME } = process.env;
mongoose.connect(`${NEXT_PUBLIC_DB_URL}${NEXT_PUBLIC_DB_COLLECTION_NAME}`)
    .then(() => {
        console.log(`Connected to ${NEXT_PUBLIC_DB_URL}`);
    }).catch((err) => {
        console.log(`Error connecting to ${NEXT_PUBLIC_DB_URL}`, err.message);
    })

export default mongoose;