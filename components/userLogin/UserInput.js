export default function UserInput({
  _label,
  _inputId,
  _type,
  _ref,
  _setState,
}) {
  function onChangeFunc(e) {
    _setState(e.target.value);
  }

  return (
    <div className="userInput-container">
      <label htmlFor={_inputId}> {_label} </label>
      <input
        id={_inputId}
        type={_type}
        ref={_ref}
        onChange={(e) => onChangeFunc(e)}
      />
    </div>
  );
}

UserInput.defaultProps = {
  _label: "Label:",
  _type: "text",
};
