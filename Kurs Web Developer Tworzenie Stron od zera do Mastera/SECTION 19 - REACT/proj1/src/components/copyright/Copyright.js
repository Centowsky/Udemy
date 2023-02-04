import React from "react";
import "./copyright.css";
import "./sassStyles.scss";

class Copyright extends React.Component {
  render() {
    return (
      <div className="copyrightBox">
        <span>
          Copyright &copy; {this.props.year} example.com All rights reserved
        </span>
      </div>
    );
  }
}
export default Copyright;
