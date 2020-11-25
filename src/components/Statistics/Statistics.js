import StatisticsItem from "./StatisticsItem";

import styles from "./Statistics.module.scss";
//{ good, neutral, bad, total, positive }
function Statistics(props) {
  const names = Object.keys(props);
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>Statistics</h2>
      {props.total > 0 ? (
        <ul className={styles.statsList}>
          {names.map((i) => {
            return <StatisticsItem name={i} value={props[i]} key={i} />;
          })}
        </ul>
      ) : (
        <p>No feedback given</p>
      )}
    </section>
  );
}

export default Statistics;
