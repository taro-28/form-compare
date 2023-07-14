import Link from "next/link";

export default function Home() {
    return (
        <main className="">
            <h1>Home</h1>
            <Link href="/server-action">ServerAction</Link>
        </main>
    );
}
