import Head from "next/head";
import BandCard from "../components/BandCard";
import styles from "../styles/Home.module.css";
import DashboardLayout from "./layout";

export default function Home() {
  const data = {
    name: "La Renga",
    image: "https://picsum.photos/200",
    genre: "Rock",
    followers: "15",
  };
  return (
    <DashboardLayout>
      <img src="/bandwise-logo.png" alt="Bandwise" className={styles.logo} />
      <h1 className={styles.title}>Bandwise</h1>
      <p className={styles.description}>Encontrá la data de tus bandas favoritas!</p>
      <BandCard {...data} />
    </DashboardLayout>
  );
}
