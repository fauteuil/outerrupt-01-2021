import React from "react";

import { TriangleButton } from "./components/buttons";
import { Timer } from "./components/timer";
import { ActivityDetails } from "./components/activities/activity-details";

export default function App() {
  /**
   * Start next queued activity.
   * Start timer.
   * Route to activity view.
   */
  function startNextActivity() {
    console.log("next!");
  }

  return (
    <div className="App">
      <h1>OUTERRUPT</h1>
      <Timer />
      <ActivityDetails />
      <TriangleButton handleClick={startNextActivity} />
    </div>
  );
}
