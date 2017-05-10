import React from "react";

const ExampleForm = ({
  textValue_1,
  textValue_2,
  textValue_3,
  checkBoxValue,
  onValueChanged,
  onSubmit
}) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Value 1:
        <input
          type="text"
          name="textValue_1"
          value={textValue_1}
          onChange={onValueChanged}
        />
      </label>
      <br />
      <label>
        Value 2:
        <input
          type="text"
          name="textValue_2"
          value={textValue_2}
          onChange={onValueChanged}
        />
      </label>
      <br />
      <label>
        Value 3:
        <input
          type="text"
          name="textValue_3"
          value={textValue_3}
          onChange={onValueChanged}
        />
      </label>
      <br />
      <label>
          Checkbox value:
          <input
            name="checkBoxValue"
            type="checkbox"
            checked={checkBoxValue}
            onChange={onValueChanged} />
        </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ExampleForm;
