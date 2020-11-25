import React, { Component } from "react";

import Controls from "./components/Controls";
import Statistics from "./components/Statistics";

import styles from "./App.module.scss";

class App extends Component {
  static defaultProps = {
    statistics: {
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      positive: 0,
    },
    controls: [
      { id: 1, value: "good" },
      { id: 2, value: "neutral" },
      { id: 3, value: "bad" },
    ],
  };
  constructor(props) {
    super(props);
    this.state = { ...this.props.statistics };
    this.addFeedback = this.addFeedback.bind(this);
  }

  setTotalFeedback() {
    this.setState((state) => {
      return {
        total: state["total"] + 1,
      };
    });
  }

  setPositiveFeedbackPercentage() {
    this.setState(({ good, total }) => {
      return {
        positive: ((good / total) * 100).toFixed(2),
      };
    });
  }

  addFeedback(type) {
    this.setState((state) => {
      return {
        [type]: state[type] + 1,
      };
    });
    this.setTotalFeedback();
    this.setPositiveFeedbackPercentage();
  }

  render() {
    return (
      <div className="App">
        <h2 className={styles.title}>Please leave feedback</h2>
        <Controls btnTypes={this.props.controls} handler={this.addFeedback} />
        <Statistics {...this.state} />
      </div>
    );
  }
}

export default App;
