import "./button.css"

function Button(props: any): JSX.Element {
  return <button {...props} className="btn">{props.children}</button>;
}

export default Button;
