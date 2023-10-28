import { connectDB } from "@/util/database.js";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if (req.method == "POST") {
        try {
            let db = (await connectDB).db("forum");
            let result = await db
                .collection("post")
                .deleteOne({ _id: new ObjectId(idd) });
            res.status(200).json("삭제완료");
        } catch {
            응답.status(500);
        }
    }
}
