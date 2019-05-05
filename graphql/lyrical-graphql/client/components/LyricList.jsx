import React from "react";
import gql from "graphql-tag";
import { compose, graphql } from "react-apollo";

class LyricList extends React.Component {
  constructor(props) {
    super(props);

    this.onLike = this.onLike.bind(this);
  }

  async onLike(id, likes) {
    const { mutate } = this.props;

    try {
      await mutate({
        variables: {
          id,
        },
        // * this is to inmediately update the UI with what we expect it should show
        // * instead of waiting for the backend to respond with new data
        // * we can know this info in the logs of the network response
        optimisticResponse: {
          __typename: "Mutation",
          likeLyric: {
            id,
            __typename: "LyricType",
            likes: likes + 1,
          },
        },
      });
    } catch (error) {
      console.log("error: ", error);
    }
  }

  renderLyrics() {
    let { lyrics } = this.props;

    lyrics = lyrics.map(({ id, content, likes }) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <div className="vote-box">
            <i
              className="material-icons"
              onClick={() => this.onLike(id, likes)}
            >
              thumb_up
            </i>
            {likes}
          </div>
        </li>
      );
    });

    return lyrics;
  }

  render() {
    return <ul className="collection">{this.renderLyrics()}</ul>;
  }
}

const mutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

LyricList = graphql(mutation)(LyricList);

export default LyricList;
