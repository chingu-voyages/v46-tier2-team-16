import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "./HomeLayout.module.css";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <main>
      <Outlet className={styles.outlet} />
      </main>
      <Footer />
      </>
  );
};
export default HomeLayout;