import { useEffect, useState } from "react";
import styles from "../styles/Splash.module.scss";
import { CrystalLoader } from "./CrystalLoader";

export const Splash = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className={styles.splash}>
      <div className={styles.logo}>
        {/* <span className={styles.crystal}>◇</span> */}
        <CrystalLoader />
        <h1 className={styles.title}>Collector's Gallery</h1>
      </div>
      <div className={styles.loader} />
    </div>
  );
};
