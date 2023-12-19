import { useState } from "react";
import { AutorizationLogin } from "../../widgets/auth";
import { LoginLeftSize } from "../../widgets/auth/login-left-size/LoginLeftSize";
import { RegistrationForm } from "../../widgets/auth/registration-form/RegistrationForm";

import styles from "./Home.module.scss";

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleChangeForm = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className={styles.root}>
      <div className={styles.formWrapper}>
        <LoginLeftSize />
        {isLogin ? (
          <AutorizationLogin changeForm={handleChangeForm} />
        ) : (
          <RegistrationForm changeForm={handleChangeForm} />
        )}
      </div>
    </div>
  );
};

export default Home;
