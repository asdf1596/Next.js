import Link from "next/link";

export default function Home() {
    return (
        <main>
            <div className="navbar">
                <Link href="/">home</Link>
                <Link href="/list">list페이지</Link>
            </div>
            <h1 className="title">Programming Log</h1>
            <p className="title-sub">by </p>
        </main>
    );
}
