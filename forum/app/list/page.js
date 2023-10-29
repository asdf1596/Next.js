import { connectDB } from "@/util/database.js";
import ListItem from "./ListItem";

export const revalidate = 20;

export default async function List() {
    let db = (await connectDB).db("forum");
    let result = await db.collection("post").find().toArray();
    result = result.map((a) => {
        a._id = a._id.toString();
        return a;
    });
    return (
        <div className="list-bg">
            <ListItem result={result} />
        </div>
    );
}
