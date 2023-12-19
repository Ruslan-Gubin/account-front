import {
  useAuthSelect,
  useFetchAuthorization,
  useRememberUser,
  useToggleRemember,
} from "../../../entities";
import {  useState } from "react";
import { CheckBox, Input, SkillButton } from "../../../shared";

import styles from "./AutorizationLogin.module.scss";

type Props = {
  changeForm: () => void;
};

const AutorizationLogin = ({ changeForm }: Props) => {
  const { toggleRemember } = useToggleRemember();
  const {
    isRemember,
    username: rememberUserName,
    password: rememberPassword,
  } = useAuthSelect();
  const [values, setValues] = useState<{ email: string, password: string }>({
    email: rememberUserName ? rememberUserName : "",
    password: rememberPassword ? rememberPassword : "",
  })
  const { handleAuthorization } = useFetchAuthorization();
  const { loading } = useAuthSelect();
  const [errorInput, setErrorInput] = useState("");
  const { rememberUser } = useRememberUser();


  const validInput = () => {
    if (values.email.length === 0) {
      setErrorInput("Enter your Email");
      return true;
    }

    if (values.password.length < 8) {
      setErrorInput("Enter a password of at least 8 characters");
      return true;
    }
    return false;
  };

  const handleLogin = () => {
    if (!!validInput()) return;

    if (isRemember) {
      rememberUser({ password: values.password, username: values.email });
    } else {
      rememberUser({ password: null, username: null });
    }

    handleAuthorization({
      password: values.password,
      email: values.email,
    });
  };



  const handleChangeInputs = (value: string, input: string) => {
    setValues(prev => ({ ...prev, [input]: value }))
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Sign in your account</h1>
        <p className={styles.subTitle}>
          Welcome back! Login with your data that you entered during
          registration
        </p>
        <span className={styles.linkRegistration}>
          or if you are visiting us for the first time, you can{" "}
          <button onClick={changeForm} className={styles.buttonLink}>
            register
          </button>
        </span>

        <div className={styles.errorContainer}>
          {errorInput.length > 0 && (
            <span className={styles.errorText}>{errorInput}</span>
          )}
        </div>
        <div className={styles.formContainer}>
          <div className={styles.inputsContainer}>
            <Input
              label="Email"
              placeholder="Enter your Email"
              errorText="Enter your Email"
              error={false}
              value={values.email}
              onChange={(e) => handleChangeInputs(e.target.value, "email")}
            />
            <Input
              label="Password"
              placeholder="Enter the password"
              errorText="Enter the password"
              error={false}
              value={values.password}
              type="password"
              onChange={(e) => handleChangeInputs(e.target.value, "password")}
            />
          </div>

          <div className={styles.footerRememberContainer}>
            <CheckBox
              active={isRemember}
              label={"Remember my preference"}
              onClick={toggleRemember}
            />
          </div>

          <SkillButton
            disabled={loading}
            onClick={handleLogin}
            text="Sing Me In"
          />
        </div>
      </div>
    </div>
  );
};

export { AutorizationLogin };
