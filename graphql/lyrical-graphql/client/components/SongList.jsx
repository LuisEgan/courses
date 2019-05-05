import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";

import fetchSongs from "../queries/fetchSongs";

class SongList extends React.Component {
  constructor(props) {
    super(props);

    this.onSongDelete = this.onSongDelete.bind(this);
    this.renderSongs = this.renderSongs.bind(this);
  }

  async onSongDelete(id) {
    try {
      const {
        mutate,
        data: { refetch },
      } = this.props;
      await mutate({ variables: { id } });

      // * re-issue the query associated to the component (good practice)
      // * is used instead of refetchQueries because of the association
      // * that being: SongList = graphql(fetchSongs)(SongList);
      await refetch();
    } catch (error) {
      console.log("error: ", error);
    }
  }

  renderSongs() {
    const {
      data: { songs },
    } = this.props;
    return songs.map(song => {
      const { id, title } = song;
      return (
        <li key={id} className="collection-item">
          <Link to={`/songs/${id}`}>{title}</Link>
          <i className="material-icons" onClick={() => this.onSongDelete(id)}>
            delete
          </i>
        </li>
      );
    });
  }

  render() {
    const {
      data: { loading },
    } = this.props;

    if (loading) return <div>Loading...</div>;

    return (
      <div>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
      title
    }
  }
`;

SongList = graphql(fetchSongs)(SongList);
SongList = graphql(mutation)(SongList);

export default SongList;
