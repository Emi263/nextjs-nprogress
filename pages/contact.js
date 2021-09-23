import { useRouter } from "next/router";
function Contact() {
  const router = useRouter();
  return (
    <>
      <h1 className="header">This is the contact page</h1>
      <div className="buttonContainer">
        <button onClick={() => router.back()}>GoBack</button>
      </div>
    </>
  );
}

export default Contact;
