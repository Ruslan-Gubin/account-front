import { ProfileInfoUserCard } from "../profile-info-user-card/ProfileInfoUserCard";
import { useAuthSelect } from "../../../entities";
import { CONFIG_APP } from "../../../shared";

import styles from "./UserInfo.module.scss";


const UserInfo = () => {
  const { user } = useAuthSelect();

  if (!user) {
    return null;
  }

  const hrefAvatar = `${CONFIG_APP.API_ENDPOINT}${user.avatar}?w=150&h=150&blur=0&rotate=0&linear=1,1&modulate=1,1&border=0,white`

  return (
    <section className={styles.root}>
        <ProfileInfoUserCard
          avatar={hrefAvatar ? hrefAvatar : null}
          email={user.email}
          name={user.name}
          gender={user.gender}
          dateOfBirte={user.date_of_birth}
        />
    </section>
  );
};

export { UserInfo };
