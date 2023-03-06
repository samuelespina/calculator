import "./Button.scss";

export default function Button(props) {
  return (
    <button
      id={props.id}
      className={props.class}
      onClick={() => {
        props.setInput({ value: props.text });
      }}
    >
      {props.text}
    </button>
  );
}
