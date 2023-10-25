"use client";
import { connectDB } from "@/util/database.js";

export default async function List() {
    let db = (await connectDB).db("forum");
    let result = await db.collection("post").find().toArray();
    console.log(result);
    return (
        <div className="list-bg">
            {result.map((a, i) => {
                return (
                    <div className="list-item" key={i}>
                        <h4>{a.title}</h4>
                        <p>1월 1일</p>
                    </div>
                );
            })}
        </div>
    );
}
