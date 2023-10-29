"use client";
//del 이랑 delete랑 뭐가 다름?????????????????
import Link from "next/link";
export default function ListItem({ result }) {
    return (
        <div>
            {result.map((a, i) => (
                <div className="list-item" key={i}>
                    <Link href={"/detail/" + result[i]._id}>
                        {result[i].title}
                    </Link>
                    <Link href={"/edit/" + result[i]._id} className="list-btn">
                        ✏️
                    </Link>
                    <button
                        className="list-btn"
                        onClick={(e) => {
                            fetch("/api/post/del", {
                                method: "DELDTE",
                                body: result[i]._id,
                            }).then(() => {
                                e.target.parentElement.style.opacity = 0;
                                setTimeout(() => {
                                    e.target.parentElement.style.display =
                                        "none";
                                }, 1000);
                            });
                        }}
                    >
                        🗑️
                    </button>
                    <p>1월 1일</p>
                </div>
            ))}
        </div>
    );
}
