import styles from "./CardUserInfoItem.module.scss";

type Props = {
  label: string;
  value: string;
};

const CardUserInfoItem = ({  label, value }: Props) => {
  return (
    <div className={styles.cardUserInfoItem}>
      <div>
      </div>
      <div className={styles.infoContainer}>
        <label className={styles.cardUserInfoLabel}>{label}</label>
        <span className={styles.cardUserEmail}>{value}</span>
      </div>
    </div>
  );
};

export { CardUserInfoItem };
