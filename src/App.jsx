import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["ready", "set", "GO"],
      text: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({
      list: [...this.state.list, this.state.text],
      text: "",
    });
  }

  render() {
    return (
      <div
        style={{
          maxWidth: "400px",
          margin: "20px auto",
          padding: "20px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          borderRadius: "8px",
          backgroundColor: "#f0f0f0",
          border: "1px solid #aaa",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#333" }}>Todo List</h1>
        <form
          onSubmit={this.onSubmit}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <input
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
            style={{
              flex: "1",
              padding: "10px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginRight: "10px",
            }}
          />
          <button
            type='submit'
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#ccc",
              color: "333",
              border: "1px solid #333",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </form>
        <ul
          style={{ listStyleType: "none", padding: "0", textAlign: "center" }}
        >
          {this.state.list.map((item, index) => {
            return (
              <li
                key={index}
                style={{
                  marginBottom: "10px",
                  padding: "10px",
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  textAlign: "left",
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
