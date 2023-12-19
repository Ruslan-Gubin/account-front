import styles from "./UserTableItem.module.scss";
import { CONFIG_APP } from "../../../shared";

type Props = {
  avatar: string;
  name: string;
  age: number;
};

const UserTableItem = ({ avatar, age, name }: Props) => {
  return (
    <div className={styles.companyListItem}>
      <img
        className={styles.avatar}
        src={avatar ? avatar : CONFIG_APP.EMPTY_AVATAR}
        alt="Avatar"
        height={50}
        width={50}
      />
      <span className={styles.companyListItemSpan}>{name ? name : "---"}</span>
      <span className={styles.companyListItemSpan}>{age ? age : "---"}</span>
      <div className={styles.actionContainer}></div>
    </div>
  );
};

export { UserTableItem };
