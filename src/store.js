import { legacy_createStore as createStore } from 'redux'

const initialState = {
  sidebarShow: true,
  asideShow: false,
  songSelected: '',
  songs: {
    recentStreams: [],
    topStreams: [],
    totalStreams: 0,
    topRecentArtist: '',
  },
  revenue: {
    ads: 0,
    subs: 0,
  },
  userGrowth: [],
}

const changeState = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'loadAllMetrics':
      return { ...state, ...payload }
    case 'setAside':
      return { ...state, asideShow: payload }
    case 'setSideBar':
      return { ...state, sidebarShow: payload }
    case 'setSong':
      return { ...state, songSelected: payload }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
