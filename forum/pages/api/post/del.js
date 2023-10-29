import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if (req.method == "POST") {
        try {
            let db = (await connectDB).db("forum");
            let result = await db.collection("post");
            //.deleteOne({ _id: new ObjectId(req.body) });
        } catch (error) {
            res.status(500);
        }
    }
}
