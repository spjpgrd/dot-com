const NowPlaying = (props) => {
  const data = { ...props.data };
  if (Object.keys(data).length != 0) {
    return (
      <dl>
        <dt>
          {data.recenttracks.track[0]["@attr"].nowplaying === "true"
            ? `Now Playing`
            : `Last Played`}
        </dt>
        <br />
        <dd>
          <span>
            <strong>{data.recenttracks.track[0].name}</strong>  <a target="_blank" href={data.recenttracks.track[0].url}>
              ☞
            </a>
          </span>
          <br />
          <small>
            <span>{data.recenttracks.track[0].artist.name}</span>
          </small>
        </dd>
      </dl>
    );
  }
};

export default NowPlaying;
