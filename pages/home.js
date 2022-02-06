import Head from "next/head";
import BottomNav from "../components/BottomNav";
import WithAuth from "../components/withAuth";
import usePatients from "../hooks/usePatients";
import s from "../styles/Home.module.css";
import CardInfo from "../components/CardInfo";
import Layout from "../components/Layout";
import { Collapse, Progress, Text } from "@nextui-org/react";

function Inicio() {
  const { docs, loading, error } = usePatients();

  return (
    <>
      <Layout>
        <Head>
          <title>Home | Boreal </title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h2>Recientes</h2>
        {loading ? (
          <Progress
            size="xs"
            indeterminated
            color="primary"
            status="primary"
            css={{ mb: "1rem" }}
          />
        ) : error ? (
          <>
            <Progress
              size="xs"
              indeterminated
              color="primary"
              status="primary"
              css={{ mb: "1rem" }}
            />
            <Text css={{ mb: "1rem" }}>
              Error al cargar los pacientes, por favor intentalo mas tarde.
            </Text>
          </>
        ) : (
          <div className={s.cardContainer}>
            <Collapse.Group shadow>
              {docs.map((doc) => (
                <CardInfo key={doc.id} name={doc.name} doc={doc.doc} />
              ))}
            </Collapse.Group>
          </div>
        )}
      </Layout>
      <BottomNav />
    </>
  );
}

export default WithAuth(Inicio);
