const NowPlaying = (props) => {
  if (props) {
    return (
      <dl>
        <dt>
          {props.recenttracks.track[0]["@attr"].nowplaying === "true"
            ? `Now Playing`
            : `Last Played`}
        </dt>
        <br />
        <dd>
          <span>
            <strong>{props.recenttracks.track[0].name}</strong>
          </span>
          <br />
          <small>
            <span>{props.recenttracks.track[0].artist.name}</span>{" "}
            <a target="_blank" href={props.recenttracks.track[0].artist.url}>
              ☞
            </a>
          </small>
        </dd>
      </dl>
    );
  }
};

export default NowPlaying;
