import { useRouter } from "next/router";
function portfolio() {
  const router = useRouter();
  return (
    <>
      {" "}
      <h1 className="header">This is the portfolio page</h1>;
      <div className="buttonContainer">
        {" "}
        <button onClick={() => router.back()}>GoBack</button>
      </div>
    </>
  );
}

export default portfolio;
