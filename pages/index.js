import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="header">This is the homepage</h1>

      <ul>
        <li>
          <Link href="/about">
            <a> About Page</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact Page</a>
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            <a>Portfolio Page</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
