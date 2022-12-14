import React from "react";
import { useState, useEffect } from "react";
import { getScorePercentile } from "../../utils";
export default function ScoreLogic(props) {
  const [percentile, setPercentile] = useState(20);

  useEffect(() => {
    const scorePercentile = getScorePercentile({ ...props });
    setPercentile(scorePercentile);
  }, [props]);

  useEffect(() => {
    if (props.setScoreStyle) {
      const result = ((percentile - 100) * -1).toFixed(0);
      props.setScoreStyle(result);
    }
  }, [percentile]);

  return <>{((percentile - 100) * -1).toFixed(0)}</>;
}
