import React, { Component } from "react";
import axios from "axios";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      title: "",
      body: ""
    };
  }

  //method to handle input change
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //submit handler
  submitHandler = e => {
    e.preventDefault();
    //POST request
    axios
      .post("https://jsonplaceholder.typicode.com/posts")
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };
  render() {
    const { userId, title, body } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default PostForm;
