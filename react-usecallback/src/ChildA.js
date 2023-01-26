import { React, memo } from "react";
function ChildA({ Learning }) {
  console.log("Child A Component");
  return <></>;
}

export default memo(ChildA);
