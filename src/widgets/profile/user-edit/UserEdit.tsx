import { useLayoutEffect, useState } from "react";
import {
  useActiveNotification,
  useAuthSelect,
  useEditUser,
  useNotificationSelect,
} from "../../../entities";
import { EditUserInput } from "../../../entities/auth/DTO/auth-dto";
import { SkillButton } from "../../../shared";
import { useMediaFiles } from "../../../shared/hook/useMediaFiles";
import { PersonalEditAvatar } from "../personal-edit-avatar/PersonalEditAvatar";
import { PersonalInfoEditForm } from "../personal-info/PersonalInfoEditForm";

import styles from "./UserEdit.module.scss";

const UserEdit = () => {
  const { user, loading } = useAuthSelect();
  const { activeNotification } = useActiveNotification();
  const mediaPreview = useMediaFiles();
  const { notificationList } = useNotificationSelect();
  const [values, setValues] = useState({
    name: user?.name ? user.name : "",
    password: "",
  });
  const { editUser } = useEditUser();

  const isChange = () => {
    if (!user) return false;

    if (user.name !== values.name) {
      return true;
    }
    if (values.password.length) {
      return true;
    }
    if (mediaPreview.fileList[0].file) {
      return true;
    }
    return false;
  };

  const validateFields = () => {
    if (mediaPreview.fileList.length === 0) {
      activeNotification({ status: "error", message: "Add a photo" });
      return false;
    }

    if (!isChange()) {
      activeNotification({ status: "error", message: "No changes" });
      return false;
    }

    if (values.name.length === 0) {
      activeNotification({ status: "error", message: "Enter new name" });
      return false;
    }

    if (values.password.length && values.password.length < 8) {
      activeNotification({
        status: "error",
        message: "Enter a password of at least 8 characters",
      });
      return false;
    }

    return true;
  };

  if (!user) {
    return null;
  }

  const handleChangeUserInfo = () => {
    if (!validateFields()) return;

    const payload: EditUserInput = {
      newImg: mediaPreview.fileList[0].result as string,
      id: user._id,
    };

    if (values.name !== user.name) {
      payload.name = values.name;
    }

    if (values.password.length) {
      payload.password = values.password;
    }

    if (mediaPreview.fileList[0].file) {
      payload.prevImg = user.avatar.public_id;
      payload.newImg = mediaPreview.fileList[0].result as string;
    }

    editUser(payload);

    setValues((prev) => ({ ...prev, password: "" }));
  };

  useLayoutEffect(() => {
    if (user.avatar.url) {
      mediaPreview.fillMedia([user.avatar.url]);
    }
  }, []);

  const handleChangeInputs = ({
    value,
    field,
  }: {
    value: string;
    field: string;
  }) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <section className={styles.root}>
        <div className={styles.firstWrapper}>
          <PersonalEditAvatar mediaPreview={mediaPreview} />
          <PersonalInfoEditForm
            name={values.name}
            password={values.password}
            changeInputs={handleChangeInputs}
          />
        </div>

        <div className={styles.buttonContainer}>
          <SkillButton
            className={styles.buttonChangeInfo}
            disabled={loading || notificationList.length > 0}
            onClick={handleChangeUserInfo}
            text="Edit"
          />
        </div>
      </section>
    </>
  );
};

export { UserEdit };
