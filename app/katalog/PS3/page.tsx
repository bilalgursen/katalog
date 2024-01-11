import Link from "next/link";

export default function Page() {
  return (
    <>
      <main className="lg-px-16 px-6 py-8">
        <object
          data="/PS3.pdf"
          type="application/pdf"
          width="100%"
          height="1300px"
        >
          <p>
            PDF dosyasını görüntüleyemiyorsanız,{" "}
            <Link className="btn" href={"/PS3.pdf"}>
              buradan indirebilirsiniz.
            </Link>
          </p>
        </object>
      </main>
    </>
  );
}
