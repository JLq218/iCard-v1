import React from "react";
import { Modal } from "semantic-ui-react";
import "./ModalBasic.scss";

export function ModalBasic(props) {
  const { show, size, title, children, onClose } = props;
  return (
    <Modal
      dimmer="inverted"
      className="modal-basic"
      open={show}
      onClose={onClose}
      size={size}
    >
      {title && (
        <Modal.Header className="modal-basic__header">{title}</Modal.Header>
      )}
      <Modal.Content className="modal-basic__content">{children}</Modal.Content>
    </Modal>
  );
}

ModalBasic.defaultProps = {
  size: "tiny",
};
