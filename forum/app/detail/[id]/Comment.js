"use client";
import { useState, useEffect } from "react";
export default function Comment(props) {
    let [Comment, setComment] = useState("");
    let [data, setData] = useState([]);
    useEffect(() => {
        fetch("/api/Comment/list?id=" + props._id)
            .then((r) => r.json())
            .then((result) => {
                setData(result);
            });
    }, []);
    return (
        <div>
            <hr></hr>
            <div>댓글목록</div>
            {data.length > 0
                ? data.map((a, i) => <p key={i}>{a.content}</p>)
                : "댓글없음"}

            <input
                onChange={(e) => {
                    setComment(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    fetch("/api/comment/new", {
                        method: "POST",
                        body: JSON.stringify({
                            comment: Comment,
                            _id: props._id,
                        }),
                    });
                }}
            >
                댓글전송
            </button>
        </div>
    );
}
