import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import fetchSong from "../queries/fetchSong";
import LyricCreate from "./LyricCreate";
import LyricsList from "./LyricList";

class SongDetails extends React.Component {
  render() {
    const {
      data: { loading, song },
      params: { id },
    } = this.props;
    
    if (loading) return <div>Loading...</div>;

    return (
      <div>
        <Link to="/">Back ◄</Link>
        <h3>{song.title}</h3>
        <LyricsList lyrics={song.lyrics} />
        <LyricCreate songId={id} />
      </div>
    );
  }
}

const gqlOpts = {
  options: props => {
    const {
      params: { id },
    } = props;
    return {
      variables: { id },
    };
  },
};

SongDetails = graphql(fetchSong, gqlOpts)(SongDetails);

export default SongDetails;
