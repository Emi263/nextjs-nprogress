import { useRouter } from "next/router";
export default function About() {
  const router = useRouter();
  return (
    <>
      <h1 className="header">This is the about page</h1>
      <div className="buttonContainer">
        <button onClick={() => router.back()}>GoBack</button>
      </div>
    </>
  );
}
