import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class LyricCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lyric: "",
      lyricPlaceholder: "Add a new lyric!",
    };

    this.handleInputOnchange = this.handleInputOnchange.bind(this);
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
    const { mutate, songId } = this.props;
    const { lyric } = this.state;

    this.setState(
      { lyric: "", lyricPlaceholder: "Adding lyric..." },
      async () => {
        try {
          await mutate({
            variables: {
              content: lyric,
              songId,
            },
          });

          this.setState({ lyricPlaceholder: "Lyric added!" });
        } catch (error) {
          console.log("error: ", error);
          this.setState({ lyricPlaceholder: "Oops, something went wrong!" });
        }
      },
    );
  }

  render() {
    const { lyric, lyricPlaceholder } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="lyric">Add a lyric</label>
        <input
          type="text"
          name="lyric"
          value={lyric}
          placeholder={lyricPlaceholder}
          onChange={e => this.handleInputOnchange("lyric", e)}
        />
      </form>
    );
  }
}

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

LyricCreate = graphql(mutation)(LyricCreate);

export default LyricCreate;
