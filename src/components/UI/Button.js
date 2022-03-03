function Button(props) {
  return (
    <button type={props.type || "button"} onClick={props.OnClick}>
      {props.children}
    </button>
  );
}

export default Button;
