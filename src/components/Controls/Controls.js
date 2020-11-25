import ControlBtn from "./ControlBtn";
import styles from "./controls.module.scss";

function Controls({ btnTypes, handler }) {
  return (
    <div className={styles.controls}>
      {btnTypes.map(({ id, value }) => {
        return (
          <ControlBtn type={value} key={id} callback={() => handler(value)} />
        );
      })}
    </div>
  );
}

export default Controls;
