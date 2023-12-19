import { CardContainer } from "../../../shared";
import { UserTableItem } from "../user-table-item/UserTableItem";

import styles from "./UsersList.module.scss";

type Props = {
  users: {
    _id: string;
    name: string;
    date_of_birth: string;
    avatar: { public_id: string; url: string };
  }[];
};

const UsersList = ({ users }: Props) => {
  const tableHeaderList = ["Avatar", "Name", "Age"];

  const getAge = (date: Date) => {
    const nowYear = new Date().getFullYear();
    const getUserYear = date.getFullYear();
    return nowYear - getUserYear;
  }

  return (
    <div className={styles.root}>
      <CardContainer>
        <ul className={styles.tableHeaderList}>
          {tableHeaderList.map((item, index) => (
            <li className={styles.tableHeaderListItem} key={index}>
              {item}
            </li>
          ))}
        </ul>

        <ul className={styles.companyList}>
          {users.length > 0 &&
            users.map((user) => (
              <li key={user._id}>
                <UserTableItem 
                age={getAge(new Date(user.date_of_birth))} 
                name={user.name} 
                avatar={user.avatar.url} 
                />
              </li>
            ))}
        </ul>
      </CardContainer>
    </div>
  );
};

export { UsersList };
