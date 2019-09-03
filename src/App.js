import React from "react";
import "./App.css";
import Search from "./Search";
import { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data =>
        this.setState({
          user: data
        })
      );
  }

  render() {
    const postUsers = this.state.user.map(user => (
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.address.city}</td>
        <td>{user.company.name}</td>
      </tr>
    ));
    return (
      <div>
        <Search />
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Company</th>
          </tr>
          {postUsers}
        </table>
      </div>
    );
  }
}
