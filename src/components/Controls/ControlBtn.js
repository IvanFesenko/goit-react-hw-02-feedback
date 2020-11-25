import styles from "./controls.module.scss";

function ControlBtn({ type, callback }) {
  return (
    <button type="button" onClick={callback} className={styles.btn}>
      {type}
    </button>
  );
}

export default ControlBtn;
