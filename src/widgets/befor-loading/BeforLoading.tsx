import styles from "./BeforLoading.module.scss";

const BeforLoading = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Loading</h1>
        <div className={styles.loader}></div>
      </div>
    </section>
  );
};

export { BeforLoading };
