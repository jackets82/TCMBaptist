import React from "react";
import Ticker from "react-ticker";

function NewsTicker() {
  return (
    <Ticker>
      {({ index }) => (
        <>
          <h1>This is the headline of element #{index}!</h1>
        </>
      )}
    </Ticker>
  );
}

export default NewsTicker;
