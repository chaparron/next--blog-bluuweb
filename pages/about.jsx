import Link from "next/link";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout title="Abouut page">
      <h1>About</h1>
      <button>
        <Link href="/">
          <a>Inicio</a>
        </Link>
      </button>
    </Layout>
  );
}
