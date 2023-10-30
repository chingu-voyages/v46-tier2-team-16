import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "./HomeLayout.module.css";

const HomeLayout = () => {
  return (
    <main>
      <Header />
      <Outlet className={styles.outlet} />
      <Footer />
    </main>
  );
};
export default HomeLayout;