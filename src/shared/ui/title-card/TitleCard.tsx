import styles from "./TitleCard.module.scss";

const TitleCard = ({ title }: { title: string }) => {
  return <h2 className={styles.title}>{title}</h2>;
};

export { TitleCard };
