import React from "react";
import "./input.css"

function Input(props: React.ComponentPropsWithoutRef<"input">): JSX.Element {
  return <input {...props} />;
}

export default Input;
