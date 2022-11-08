import React from "react";
import "./CurrentDate.css";
import { format } from "date-fns";
function CurrentDate() {
  let newDate = format(new Date(), "EEE MMM dd, yyyy H:mm a");
  let newHours = new Date();
  var crthr = newHours.getHours();

  return (
    <>
      <div className="date--comp p-2">
        <p className="mx-5">
          {crthr < "12" ? "Good Morning!" : "Good Afternoon!"}
          <span> {newDate}</span>
        </p>
      </div>
    </>
  );
}
export default CurrentDate;
