import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if (req.method == "POST") {
        try {
            let db = (await connectDB).db("forum");
            let result = await db
                .collection("post")
                .deleteOne({ _id: new ObjectId(req.body) });

            // 성공적인 응답을 JSON 형식으로 반환
            res.status(200).json({ message: "Success", result });
        } catch (error) {
            // 오류 응답을 JSON 형식으로 반환
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
