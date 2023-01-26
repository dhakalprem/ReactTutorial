import React, { useContext } from "react";
import { data, data1 } from "./App";
function ChildC() {
  const FullName = useContext(data);
  const Address = useContext(data1);
  return (
    <>
      <h1>My Name is  {FullName}</h1>
      <h1>Address  {Address}</h1>
    </>
  );
}

export default ChildC;
