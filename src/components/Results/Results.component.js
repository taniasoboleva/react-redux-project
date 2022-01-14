import React from "react";
import * as Styles from "./Results.styles";

const Results = () => {
  return (
    <Styles.Container>
      <Styles.Position>
        <div>0</div>
        <div>0</div>
        <div>0</div>
      </Styles.Position>
      <Styles.Position>
        <div>Km driven</div>
        <div>Driving time</div>
        <div>Driving time</div>
      </Styles.Position>
    </Styles.Container>
  );
};

export default Results;
