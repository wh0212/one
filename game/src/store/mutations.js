import * as types from './mutation-types'

const matutaions = {
  [types.SET_PLAYING_STATE](state, flag) {
    state.playing = flag
  },
  [types.SET_DURATION](state, time) {
    state.duration = time
  },
  [types.SET_FULL_SCREEN](state, flag) {
    state.fullScreen = flag
  },
  [types.SET_PAGE_FULL_SCREEN](state, flag) {
    state.pageFullScreen = flag
  }
}

export default matutaions
