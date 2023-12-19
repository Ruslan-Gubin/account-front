
import styles from './SkillButton.module.scss';

type Props = {
  disabled?: boolean
  text: string
  onClick?: () => void;
  className?: string;
  colorGreen?: boolean;
  colorOrange?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

const SkillButton = ({ type='button', disabled, onClick, text, className, colorGreen, colorOrange }: Props) => {

  const classesButton = [`${styles.button}` ]

  if (className) {
    classesButton.push(`${className}`)
  }
  if (disabled) {
    classesButton.push(`${styles.buttonOpasity}`)
  }
  if (colorGreen) {
    classesButton.push(`${styles.buttonGreen}`)
  }
  if (colorOrange) {
    classesButton.push(`${styles.colorOrange}`)
  }

  return (
    <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={classesButton.join(' ')}
  >
    <span className={styles.buttonText}>{text}</span>
  </button>
  );
};

export { SkillButton };