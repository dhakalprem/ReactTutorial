import React from "react";
import { data, data1 } from "./App";
function ChildC() {
  return (
    <>
      <data.Consumer>
        {(name) => {
          return (
            <data1.Consumer>
              {(address) => {
                return (
                  <h1>
                    My Name is {name} and Address {address}
                  </h1>
                );
              }}
            </data1.Consumer>
          );
        }}
      </data.Consumer>
    </>
  );
}

export default ChildC;
