import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import View from "./view";

class CreditCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numcard: "",
      name: "",
      thru: ""
    };
    this.handleChangeNum = this.handleChangeNum.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangethru = this.handleChangethru.bind(this);
  }

  handleChangeNum(event) {
    let Regex = /[0-9]{1,4}/g;
    let x = event.target.value;
    if (x !== "") {
      this.setState({
        numcard: event.target.value
          .match(Regex)
          .join(" ")
          .slice(0, 19)
      });
    } else {
      this.setState({
        numcard: x
      });
    }
  }

  handleChangeName(event) {
    let Regex = /^[A-Za-z]+$/;
    let x = event.target.value;
    if (x !== "") {
      this.setState({
        name: event.target.value
          .match(Regex)
          .join("")
          .slice(0, 12)
      });
    } else {
      this.setState({
        name: x
      });
    }
  }

  handleChangethru(event) {
    let Regex = /[0-9]{1,2}/g;
    let x = event.target.value;
    if (x !== "") {
      if (x.length <= 5) {
        this.setState({
          thru: event.target.value
            .match(Regex)
            .join("/")
            .toString()
        });
      } else {
        this.setState({
          thru: (x = "")
        });
      }
    } else {
      this.setState({
        thru: (x = "")
      });
    }
  }

  render() {
    return (
      <div className="Card">
        <View state={this.state} TestMonth={this.TestMonth} />
        <div className="inputs">
          <input
            type="text"
            placeholder="Change card number"
            onChange={this.handleChangeNum}
            value={this.state.numcard}
          />
          <input
            type="text"
            placeholder="Change name"
            onChange={this.handleChangeName}
            value={this.state.name}
          />
          <input
            type="text"
            placeholder="Change Valid thru"
            onChange={this.handleChangethru}
            value={this.state.thru}
          />
        </div>
      </div>
    );
  }
}

export default CreditCard;
