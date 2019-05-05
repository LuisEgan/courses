import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link, hashHistory } from "react-router";

import fetchSongs from "../queries/fetchSongs";

class SongCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputOnchange(inputName, e) {
    const {
      target: { value },
    } = e;
    this.setState({ [inputName]: value });
  }

  async onSubmit(e) {
    e.preventDefault();
    const { mutate } = this.props;
    const { title } = this.state;

    try {
      await mutate({
        variables: {
          title,
        },
        refetchQueries: [{ query: fetchSongs, variables: {} }],
      });

      hashHistory.push("/");
    } catch (error) {
      console.log("error: ", error);
    }
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <Link to="/">Back ◄</Link>
        <h3>Create a new song!</h3>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="title">Song title</label>
          <input
            type="text"
            name="title"
            onChange={e => this.handleInputOnchange("title", e)}
            value={title}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
