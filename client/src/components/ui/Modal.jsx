import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose} />;
};
const Overlay = ({ header, content, actions }) => {
  return (
    <div className={styles.overlay}>
      {header && <header className={styles.header}>{header}</header>}
      <div className={styles.content}>{content}</div>
      {actions && <footer className={styles.actions}>{actions}</footer>}
    </div>
  );
};

const Modal = ({onClose,header,content,actions})=> {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose}/>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay header={header} content={content} actions={actions} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};
export default Modal;