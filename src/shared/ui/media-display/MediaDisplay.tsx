import { ChangeMediaFileSvg } from "../../svg/ChangeMediaFileSvg";
import { TrashSvg } from "../../svg/TrashSvg";

import styles from "./MediaDisplay.module.scss";

type MediaDisplayProps = {
  image?: string | ArrayBuffer | null;
  video?: string | ArrayBuffer | null;
  removeDisplay: () => void;
  editDisplay?: () => void;
  size: "lg" | "sm";
}

const MediaDisplay = ({ size='lg', video, image, removeDisplay, editDisplay }: MediaDisplayProps) => {

  return (
    <div className={size === 'sm' ? `${styles.display} ${styles.smallSize}` : styles.display}>
      {image &&
      <picture className={ styles.imageWrapper}>
      <div className={size === 'sm' ? `${styles.magnifier} ${styles.magnifierSm}` : styles.magnifier}></div>
      <img src={String(image)} alt="Display Image" className={size === 'sm' ? `${styles.media} ${styles.smallSize}` : styles.media} />
      </picture>
      }
      {video &&
      <div className={styles.videoWrapper}>
      <video src={String(video)} controls={size === 'lg'} className={size === 'sm' ? `${styles.video} ${styles.videoSmall}` :  styles.video}>
      Ваш браузер не поддерживает видео.
      </video>
      </div>
      }
      <div className={!editDisplay || size === 'sm' ? `${styles.buttonContainder} ${styles.buttonContainderSingl}` : styles.buttonContainder}>
       {editDisplay && size === 'lg' &&
       <>
        <button onClick={editDisplay} className={styles.button}>
       <ChangeMediaFileSvg />
          Edit
          </button> 
       </>
       }
        <button onClick={removeDisplay} className={styles.button}>
          <TrashSvg />
          Remove
          </button>
      </div>
    </div>
  );
};

export { MediaDisplay };