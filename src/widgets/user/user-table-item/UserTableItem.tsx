import { CONFIG_APP } from "../../../shared";

import styles from "./UserTableItem.module.scss";

type Props = {
  avatar: string;
  name: string;
  age: number;
};

const UserTableItem = ({ avatar, age, name }: Props) => {

  const hrefAvatar = `${CONFIG_APP.API_ENDPOINT}${avatar}?w=50&h=50&blur=0&rotate=0&linear=1,1&modulate=1,1&border=0,white`;

  return (
    <div className={styles.companyListItem}>
      <img
        className={styles.avatar}
        src={hrefAvatar ? hrefAvatar : CONFIG_APP.EMPTY_AVATAR}
        alt="Avatar"
        height={50}
        width={50}
      />
      <span className={styles.companyListItemSpan}>{name ? name : "---"}</span>
      <span className={styles.companyListItemSpan}>{age ? age : "0"}</span>
      <div className={styles.actionContainer}></div>
    </div>
  );
};

export { UserTableItem };
