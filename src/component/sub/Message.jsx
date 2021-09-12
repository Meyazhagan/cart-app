import { Component } from "react";
import "../css/message.style.css";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = { message: props.message };
    setTimeout(() => {
      this.setState({ message: "" });
    }, 6000);
  }
  render() {
    const { message } = this.state;
    return !message ? (
      <></>
    ) : (
      <div className="message" id="message">
        {message}
      </div>
    );
  }
}

export default Message;
