import styles from "./Statistics.module.scss";

function StatisticsItem({ name, value }) {
  return (
    <li className={styles.item}>
      {name}: <span className={`${styles.value} ${styles[name]}`}>{value}</span>
    </li>
  );
}

export default StatisticsItem;
