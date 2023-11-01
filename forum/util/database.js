import { MongoClient } from "mongodb";
const url =
    "mongodb+srv://7082mc:msmc0106$$@cluster0.r8yzn1j.mongodb.net/?retryWrites=true&w=majority";
const options = { useNewUrlParser: true };
let connectDB;

if (process.env.NODE_ENV === "development") {
    if (!global._mongo) {
        global._mongo = new MongoClient(url, options).connect();
    }
    connectDB = global._mongo;
} else {
    connectDB = new MongoClient(url, options).connect();
}
export { connectDB };
export default async function Write2() {
    async function handleSubmit(formData) {
        "use server";
        const db = (await connectDB).db("forum");
        await db
            .collection("post_test")
            .insertOne({ title: formData.get("title") });
    }

    return (
        <form action={handleSubmit}>
            <input type="text" name="title" />
            <button type="submit">Submit</button>
        </form>
    );
}
