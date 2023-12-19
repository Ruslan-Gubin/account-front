import React from "react";
import type { ModalProps } from "./types";

import "./Modal.css";

const Modal: React.FC<ModalProps> = React.memo((props) => {
  const { active, handleClose, children, height, width } = props;
  const rootRef = React.useRef<HTMLDivElement>(null);

  const rootClasses = {
    wrapper: ["modal-wrapper"],
    container: ["modal-container"],
  };

  if (active) {
    rootClasses.wrapper.push("modal-wrapper__active");
    rootClasses.container.push("modal-container__active");
  }

  const clickOutside = (e: MouseEvent) => {
      if (rootRef.current && (e.target as Node).contains(rootRef.current) && handleClose) {
        handleClose();
      }
    };

  React.useEffect(() => {
    if (!rootRef.current) return;

    const node = rootRef.current;

    node.addEventListener("click", clickOutside);

    return () => {
    node.removeEventListener("click", clickOutside);
    };
  }, []);

  const styles:{[key: string]: string | number} = {}

  if (width) {
    styles['width'] = width
  }

  if (height) {
    styles['height'] = height
  }


  return (
    <div ref={rootRef} className={rootClasses.wrapper.join(" ")}>
      <div
        style={styles}
        className={rootClasses.container.join(" ")}
      >
        {children}
      </div>
    </div>
  );
}); 

Modal.displayName = "Modal";

export { Modal };
