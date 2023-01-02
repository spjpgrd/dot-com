const data = await fetch(
  "https://ws.audioscrobbler.com/2.0/?api_key=d89f57d26c2715455eda7c4cef52490c&method=User.getrecenttracks&user=spjpgrd&format=json&limit=1&extended=1"
)
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .catch((error) => {
    console.error(error);
  });

const NowPlaying = () => {
  if (data) {
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
            <strong>{data.recenttracks.track[0].name}</strong>
          </span>
          <br />
          <small>
            <span>{data.recenttracks.track[0].artist.name}</span>{" "}
            <a target="_blank" href={data.recenttracks.track[0].artist.url}>
              ☞
            </a>
          </small>
        </dd>
      </dl>
    );
  }
};

export default NowPlaying;
