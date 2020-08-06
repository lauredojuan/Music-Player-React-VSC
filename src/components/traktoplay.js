import React, { Component } from "react";
// import { PropTypes } from "prop-types";

class Traktoplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <li onClick={() => this.props.deleteFunction(this.props.id)}></li>;
  }
}

export default Traktoplay;
