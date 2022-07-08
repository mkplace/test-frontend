import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div style={{ padding: "0 2rem" }}>
      <main
        style={{
          padding: "4rem 0",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ marginBottom: 2 }}>
          <Image
            src="/logo-mkplace.png"
            alt="Mkplace Logo"
            width={200}
            height={35}
          />
        </span>

        <h1
          style={{
            margin: 0,
            paddingTop: 1,
            paddingBottom: 5,
            textAlign: "center",
          }}
        >
          Seja bem-vindo(a) ao teste técnico para
        </h1>

        <p style={{ fontSize: "2rem", margin: 0 }}>Front-end</p>

        <a
          href="https://github.com/mkplace/test-frontend"
          target="_blank"
          style={{
            color: "#ed1b49",
            fontWeight: "bold",
            fontSize: "3rem",
            textDecoration: "none",
            marginTop: 50,
          }}
          rel="noreferrer"
        >
          https://github.com/mkplace/test-frontend
        </a>
      </main>

      <footer
        style={{
          display: "flex",
          flex: 1,
          padding: "2rem 0",
          borderTop: "1px solid #eaeaea",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        Todas as informações aqui contidas não serão utilizadas para clientes,
        projetos ou tarefas internas. As situações aqui utilizadas são apenas
        para análise de capacidade técnica aplicada à vaga disponível.
      </footer>
    </div>
  );
};

export default Home;
