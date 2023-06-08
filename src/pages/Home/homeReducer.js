export const initialHomeState = {
  searchTerm: '',
  userInfo: [],
  isTyping: false,
  isLoading: false,
  hasError: false,
};

export const actions = {
  typing: (searchTerm) => ({ type: 'TYPING', payload: searchTerm }),
  submiting: () => ({ type: 'SUBMITING' }),
  searching: () => ({ type: 'SEARCHING' }),
  infoSearched: (info) => ({ type: 'INFO_SEARCHED', payload: info }),
  searchFailed: () => ({ type: 'SEARCH_FAILED' }),
};

export default function homeReducer(state, action) {
  switch (action.type) {
    case 'TYPING':
      return {
        ...state,
        isTyping: true,
        userInfo: !state.searchTerm ? [] : state.userInfo,
        searchTerm: action.payload,
      };
    case 'SUBMITING':
      return {
        ...state,
        isTyping: false,
      };
    case 'SEARCHING':
      return {
        ...state,
        isLoading: true,
      };
    case 'INFO_SEARCHED':
      return {
        ...state,
        isLoading: false,
        hasError: false,
        userInfo: action.payload,
      };
    case 'SEARCH_FAILED':
      return {
        ...state,
        hasError: true,
        isLoading: false,
        userInfo: [],
      };
    default:
      return state;
  }
}
