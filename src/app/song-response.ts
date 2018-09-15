export interface SongResponse {
  result: {
    track: {
      name: string;
      text: string;
    },
    artist: {
      name: string;
    }
  };
}
