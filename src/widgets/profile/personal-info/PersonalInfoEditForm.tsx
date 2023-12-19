import { CardContainer, Input, TitleCard } from "../../../shared";

import styles from "./PersonalInfoEditForm.module.scss";

type Props = {
  name: string;
  password: string;
  changeInputs: ({ field, value }: { value: string; field: string }) => void;
};

const PersonalInfoEditForm = ({ name, changeInputs, password }: Props) => {
  return (
    <section className={styles.root}>
      <TitleCard title="Personal information" />
      <CardContainer>
        <div className={styles.formWrapper}>
          <Input
            label="Name"
            placeholder="Enter new name"
            errorText="Enter Name"
            error={false}
            value={name}
            onChange={(e) =>
              changeInputs({ value: e.target.value, field: "name" })
            }
          />
          <Input
            label="Password"
            placeholder="Enter new password"
            errorText="Enter new password"
            error={false}
            type="password"
            value={password}
            onChange={(e) =>
              changeInputs({ value: e.target.value, field: "password" })
            }
          />
        </div>
      </CardContainer>
    </section>
  );
};

export { PersonalInfoEditForm };
