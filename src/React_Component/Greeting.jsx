import React from "react";
var fName = "Kritika";
var hour = new Date().getHours();
var minute = new Date().getMinutes();

const customheadingh3 = {
  color: ""
};

let greeting;
if (hour < 12) {
  greeting = "Good Morning";
  customheadingh3.color = "red";
} else if (hour >= 12 && hour <= 16) {
  greeting = "Good Afternoon";
  customheadingh3.color = "green";
} else {
  greeting = "Good Evening";
  customheadingh3.color = "blue";
}
function Greeting() {
  return (
    <div>
      <h3>
        Now its {hour}:{minute}
      </h3>
      <h3 className="h3-heading" style={customheadingh3}>
        {greeting} {fName}
      </h3>
    </div>
  );
}
export default Greeting;
