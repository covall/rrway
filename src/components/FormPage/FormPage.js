import React from "react";

import ExampleForm from "./ExampleForm";

class FormPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.onValueChanged = this.onValueChanged.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      textValue_1: '',
      textValue_2: '',
      textValue_3: '',
      checkBoxValue: false,
    }
  }

  onSubmit(event) {
    // alert('Submited: ' + this.state.textValue_1);
    event.preventDefault();
    console.log('submited', this.state);
  }

  onValueChanged(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    console.log('onValueChanged: ',name, value);

    this.setState({
      [name]: value
    });
  }
  
  render() {
    const { textValue_1, textValue_2, textValue_3, checkBoxValue } = this.state;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "30px"
        }}
      >
        <ExampleForm
          textValue_1={textValue_1}
          textValue_2={textValue_2}
          textValue_3={textValue_3}
          checkBoxValue={checkBoxValue}
          onValueChanged={this.onValueChanged}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export default FormPage;
