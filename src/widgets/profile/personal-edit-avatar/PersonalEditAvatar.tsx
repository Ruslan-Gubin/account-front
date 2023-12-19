import { CardContainer,  TitleCard } from "../../../shared";
import { MediaDisplay } from "../../../shared/ui/media-display/MediaDisplay";
import { AddMedia } from "../../../shared/ui/add-media/AddMedia";
import type { MediaPreviewType } from "../../../shared/types/media";

import styles from "./PersonalEditAvatar.module.scss";


type Props = {
  mediaPreview: MediaPreviewType;
}

const PersonalEditAvatar = ({  mediaPreview }: Props) => {

  // const validatePhoto = () => {
  //   if (!user) return false;

  //   if (typeof mediaPreview.fileList[0] === "undefined") {
  //     activeNotification({ status: "error", message: "Добавьте фото" });
  //     return false;
  //   }

  //   if (mediaPreview.fileList[0].result && !mediaPreview.fileList[0].file) {
  //     activeNotification({ status: "error", message: "Выберите новое фото" });
  //     return false;
  //   }

  //   return true;
  // };


  return (
    <section className={styles.root}>
      <TitleCard title="Avatar" />

      <CardContainer>
        <div className={styles.formWrapper}>
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
              description="Добавить фото"
              size="lg"
            />
          )}

         
        </div>
      </CardContainer>
    </section>
  );
};

export { PersonalEditAvatar };
