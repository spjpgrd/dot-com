function NowPlaying(props) {
  const data = { ...props.data };
  if (Object.keys(data).length != 0) {
    return (
      <>
        <dl>
          <dt>
            {data.recenttracks.track[0]["@attr"]?.nowplaying === "true"
              ? `Now Listening to:`
              : `Last Listened to:`}
          </dt>
          <br />
          <dd>
            <span>
              <strong>{data.recenttracks.track[0].name}</strong>{" "}
              <a target="_blank" href={data.recenttracks.track[0].url}>
                ☞
              </a>
            </span>
            <br />
            <small>
              <span>{data.recenttracks.track[0].artist.name}</span>
            </small>
          </dd>
        </dl>
        <p>Provided by <a rel="me" target="_blank" href="/on/lastfm">Last.fm</a></p>
      </>
    );
  }
};

export default NowPlaying;
