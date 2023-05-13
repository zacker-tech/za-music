import { actions } from "./actions";

export const initialState = {
  track: null,
  tracks: [],
  isPlaying: false,
};

export function playerReducer(state, action) {
  switch (action.type) {
    case actions.SET_TRACKS_DATA: {
      return {
        ...state,
        isPlaying: action.isPlaying,
        track: action.track,
        tracks: action.tracks,
      };
    }
    case actions.TOGGLE_PLAY: {
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };
    }
    case actions.NEXT_SONG: {
      if (!state.tracks || !state.track) return;

      const curentSongIndex = state.tracks.findIndex((track) => track.id === state.track.id);

      const nextSongIndex = curentSongIndex === state.tracks.length - 1 ? 0 : curentSongIndex + 1;

      return {
        ...state,
        track: state.tracks[nextSongIndex],
      };
    }
    case actions.PREV_SONG: {
      if (!state.tracks || !state.track) return;

      const curentSongIndex = state.tracks.findIndex((track) => track.id === state.track.id);

      const nextSongIndex = curentSongIndex === 0 ? state.tracks.length - 1 : curentSongIndex - 1;

      return {
        ...state,
        track: state.tracks[nextSongIndex],
      };
    }
    default:
      return state;
  }
}
