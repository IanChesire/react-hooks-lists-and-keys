import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
    "black",
    "red",
    "blue", 
  ];

  const Colors = colors.map((color) => {
    return <li key={color} style= {{color:color}}>{color}</li>;
  });

  return (
    <div>
      <h1>Top CSS Colors</h1>
      <ol>
        {Colors}
      </ol>
    </div>
  );
}

export default ColorList;
