import React, { Component } from "react";
import DropDown from "../../Atoms/DropDown/DropDown";

class Abc extends Component {
  state = {
    options: [
      { value: "Female", option: "Female" },
      { value: "Male", option: "Male" },
    ],
    gender: "",
  };
  render() {
    return (
      <div>
        <DropDown
          onChange={(e) => this.setState({ gender: e.target.value })}
          label='Gender'
          value={this.state.gender}
          options={this.state.options}
        />
        <div>
          gender:
          {this.state.gender === "Female" && <div>female</div>}
        </div>
      </div>
    );
  }
}

export default Abc;
