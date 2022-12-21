import React from "react";

// css
import * as S from "./Styles";

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector("#modal");
    modal!.classList.add("hide");
  };

  return (
    <div id="modal" className="hide">
      <S.Fade onClick={closeModal}></S.Fade>
      <S.Modal>
        <h2>Texto modal</h2>
        {children}
      </S.Modal>
    </div>
  );
};

export default Modal;
