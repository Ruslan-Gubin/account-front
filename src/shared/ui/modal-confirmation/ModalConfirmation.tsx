import { ErrorRad } from "../../svg/ErrorRad";
import { Modal } from "../modal/Modal";
import { SkillButton } from "../skill-button/SkillButton";

import style from "./ModalConfirmation.module.scss";

type ModalConfirmation = {
  status: "error" | "success";
  isOpen: boolean;
  closeModal: () => void;
  onClick: () => void;
  titleText: string;
  subTitleText: string;
  buttonText: { submit: string; cancel: string };
};

export function ModalConfirmation(props: ModalConfirmation) {
  const {
    buttonText,
    closeModal,
    isOpen,
    onClick,
    status,
    titleText,
    subTitleText,
  } = props;
  return (
    <Modal active={isOpen} handleClose={closeModal}>
      <div className={style.container}>
        {status === "error" && <ErrorRad />}
        <h1 className={style.title}>{titleText}</h1>
        <p className={style.subtitle}>{subTitleText}</p>
        <div className={style.button_container}>
          <button onClick={() => closeModal()} className={style.button_close}>
            {buttonText.cancel}
          </button>

          <SkillButton onClick={onClick} text={buttonText.submit} />
        </div>
      </div>
    </Modal>
  );
}
