import Link from "next/link";
import Layout from "../components/Layout";

export default function Contacto() {
  return (
    <Layout title="Contact page">
      <h1>Contacto</h1>
      <button>
        <Link href="/">
          <a>Inicio</a>
        </Link>
      </button>
    </Layout>
  );
}
