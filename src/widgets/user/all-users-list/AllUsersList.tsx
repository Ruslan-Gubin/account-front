import { useEffect, useState } from "react";
import { useActiveNotification, useAuthSelect } from "../../../entities";
import { AccountUser } from "../../../entities/auth/DTO/auth-dto";
import { authAdapter } from "../../../entities/auth/service";
import { Loader } from "../../../shared";
import { EmptyResurse } from "../../../shared/ui/empty-resurse/EmptyResurse";
import { UsersList } from "../users-list/UsersList";

import styles from "./AllUsersList.module.scss";

const AllUsersList = () => {
  const { user } = useAuthSelect();
  const [isLoaded, setIsLoaded] = useState(true);
  const [users, setUsers] = useState<AccountUser[]>([]);
  const { activeNotification } = useActiveNotification();

  if (!user) {
    return null;
  }

  const fetchAllUsers = async () => {
    setIsLoaded(true);

    const response = await authAdapter.getAll({ id: user._id });
    if (response.data && "text" in response.data) {
      activeNotification({
        status: "error",
        message: "Failed get all accounts",
      });
    }

    if (response.data) {
      setUsers(response.data.users);
    }

    setIsLoaded(false);
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  if (isLoaded) {
    return <Loader />;
  }

  return (
    <section className={styles.root}>
      {users.length > 0 ?
      <UsersList users={users} />
      :
      <EmptyResurse text="There are no accounts at the moment, you can create more accounts" />
      }
    </section>
  );
};

export { AllUsersList };
