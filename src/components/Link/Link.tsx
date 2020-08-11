import React from "react";

import styles from "./Link.module.scss";

const Link: React.FunctionComponent = () => (
  <a
    className={styles.link}
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer">
    Learn React
  </a>
);

export default Link;
