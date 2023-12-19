import { useState } from "react";
import { useAuthSelect, useRegistration } from "../../../entities";
import { Input, SkillButton } from "../../../shared";
import { useMediaFiles } from "../../../shared/hook/useMediaFiles";
import { OptionsSelectType } from "../../../shared/types/OptionsSelectType";
import { AddMedia } from "../../../shared/ui/add-media/AddMedia";
import { DatePicker } from "../../../shared/ui/date-picker/DatePicker";
import { Dropdown } from "../../../shared/ui/dropdown/Dropdown";
import { MediaDisplay } from "../../../shared/ui/media-display/MediaDisplay";

import styles from "./RegistrationForm.module.scss";

type Props = {
  changeForm: () => void;
};


const RegistrationForm = ({ changeForm }: Props) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    date_of_birth: "",
    gender: { id: "0", label: "Man", value: "man" },
    avatar: "",
  });
  const { loading } = useAuthSelect();
  const [errorInput, setErrorInput] = useState("");
  const mediaPreview = useMediaFiles();
  const { registration } = useRegistration();

  const handleChangeInputs = (
    value: string | OptionsSelectType | null,
    field: string
  ) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errorInput) {
      setErrorInput("");
    }
  };

  const validInput = () => {
    const regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (values.date_of_birth.length === 0) {
      setErrorInput("Enter your date of birth");
      return true;
    }
    if (values.name.length === 0) {
      setErrorInput("Enter your name");
      return true;
    }
    if (values.email.length === 0) {
        setErrorInput("Enter your Email");
        return true;
    }
    if (!values.email.match(regEmail)) {
        setErrorInput("Invalid email format!");
        return true;
    }
    if (values.email.length === 0) {
        setErrorInput("Enter your Email");
        return true;
    }

    if (values.password.length < 8) {
      setErrorInput("Enter a password of at least 8 characters");
      return true;
    }
    if (!mediaPreview.fileList[0]) {
      setErrorInput("Add your photo");
      return true;
    }

    return false;
  };

  const handleRegistration = () => {
    if (!!validInput()) return;

    if (!mediaPreview.fileList[0].file) {
      return;
    }
    if (!mediaPreview.fileList[0].result) {
      return;
    }

    registration({
      avatar: mediaPreview.fileList[0].result as string,
      password: values.password,
      name: values.name,
      date_of_birth: values.date_of_birth,
      email: values.email,
      gender: values.gender.value,
    });
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Sign up your account</h1>
        <span className={styles.linkRegistration}>
          Already have an account?{" "}
          <button onClick={changeForm} className={styles.buttonLink}>
            Sign in
          </button>
        </span>

        <div className={styles.errorContainer}>
          {errorInput.length > 0 && (
            <span className={styles.errorText}>{errorInput}</span>
          )}
        </div>

        <div className={styles.formContainer}>
          <div className={styles.inputsContainer}>
            <div className={styles.headerFormContainer}>
              <div className={styles.sideFormContainer}>
                <div className={styles.sideInputContainer}>
                  <Dropdown
                    label="Gender"
                    size="sm"
                    options={[
                      { id: "0", label: "Man", value: "man" },
                      { id: "1", label: "Women", value: "women" },
                    ]}
                    selected={values.gender}
                    onSelect={(value) => handleChangeInputs(value, "gender")}
                    className={styles.dropdownGender}
                  />
                  <DatePicker
                    label="Date"
                    language="eng"
                    placeholder="Date of birth"
                    value={
                      values.date_of_birth
                        ? new Date(values.date_of_birth)
                        : null
                    }
                    changeDate={(value) =>
                      handleChangeInputs(value.toString(), "date_of_birth")
                    }
                  />
                </div>
              </div>
              <div className={styles.mediaContainer}>
                {mediaPreview.fileList.length > 0 ? (
                  <MediaDisplay
                    size="lg"
                    image={mediaPreview.fileList[0].result}
                    editDisplay={() =>
                      mediaPreview.handleEditFile(mediaPreview.fileList[0].id)
                    }
                    removeDisplay={() =>
                      mediaPreview.removeFile(mediaPreview.fileList[0].id)
                    }
                  />
                ) : (
                  <AddMedia
                    changeFile={mediaPreview.changeFile}
                    fileRef={mediaPreview.fileRef}
                    description="Add a photo"
                    size="lg"
                  />
                )}
              </div>
            </div>
            <Input
              label="Name"
              placeholder="Enter your Name"
              errorText="Enter your Email"
              error={false}
              value={values.name}
              onChange={(e) => handleChangeInputs(e.target.value, "name")}
            />
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
          <div className={styles.submitContainer}>
            <SkillButton
            type="submit"
              disabled={loading}
              onClick={handleRegistration}
              text="Sign me up"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { RegistrationForm };
