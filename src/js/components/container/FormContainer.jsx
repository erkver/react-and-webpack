import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import ReactDOM from "react-dom";
import axios from "axios";
import Input from "../presentational/Input.jsx";
import "./FormContainer.scss"

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      facts: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/facts").then(res => {
        // console.log(res.data.all);
        this.setState({facts: res.data.all})
      }).catch(err => console.log(err));
  }

  handleChange(e) {
    this.setState({[e.target.id]: e.target.value})
  }

  render() {
    const { title, facts } = this.state;
    let factList = facts.map((e, i) => (
      <div style={{"border": "1px solid black"}} key={i}>
        <p>{e.text} - {e.upvotes.length}</p>
      </div>
    ));
    // console.log(facts);
    return (
      <form id="article-form">
        <h1>Hello</h1>
        <Input
          text="Title"
          label="title"
          type="text"
          id="title"
          value={title}
          handleChange={this.handleChange}
        />
        {factList}
      </form>
    );
  }
}

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;

export default hot(FormContainer);