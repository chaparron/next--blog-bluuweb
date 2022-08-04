import Layout from "../../components/Layout";
import Link from "next/link";

export default function index({ data }) {
  return (
    <Layout
      title="listado de posts"
      description="aquí se verán todos los posts"
    >
      <h1>Listado de posts</h1>
      {data.map(({ id, title, body }) => (
        <div key={id}>
          <Link href="/blog/1">
            <a>
              {" "}
              <h2>
                {id} - {title}
              </h2>
            </a>
          </Link>
          <p>{body}</p>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return {
      props: {
        data,
        fallback: false,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
