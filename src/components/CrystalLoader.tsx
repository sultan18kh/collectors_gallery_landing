import styles from "../styles/CrystalLoader.module.scss";

export const CrystalLoader = () => (
  <div className={styles.loaderContainer}>
    <div className={styles.crystal}>
      <div className={styles.facet}></div>
      <div className={styles.facet}></div>
      <div className={styles.facet}></div>
    </div>
  </div>
);
