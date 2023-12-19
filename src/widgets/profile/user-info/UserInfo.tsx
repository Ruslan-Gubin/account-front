import { ProfileInfoUserCard } from "../profile-info-user-card/ProfileInfoUserCard";
import { useAuthSelect } from "../../../entities";

import styles from "./UserInfo.module.scss";


const UserInfo = () => {
  const { user } = useAuthSelect();

  if (!user) {
    return null;
  }

  return (
    <section className={styles.root}>
        <ProfileInfoUserCard
          avatar={user.avatar.url ? user.avatar.url : null}
          email={user.email}
          name={user.name}
          gender={user.gender}
          dateOfBirte={user.date_of_birth}
        />
    </section>
  );
};

export { UserInfo };
