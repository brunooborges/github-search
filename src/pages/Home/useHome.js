// import { useState } from 'react';

import { useReducer } from 'react';

import UserService from '../../services/UserService';
import homeReducer, { actions, initialHomeState } from './homeReducer';

// export default function useHome() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [userInfo, setUserInfo] = useState([]);
//   const [isTyping, setIsTyping] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [hasError, setHasError] = useState(false);

//   function handleChangeSearchTerm(event) {
//     setIsTyping(true);

//     if (!searchTerm) {
//       setUserInfo();
//       setSearchTerm(event.target.value);
//     } else {
//       setSearchTerm(event.target.value);
//     }
//   }

//   async function handleUserSearch() {
//     try {
//       setIsLoading(true);

//       const { items } = await UserService.getUserByName(searchTerm);

//       setHasError(false);
//       setUserInfo(items);
//     } catch {
//       setHasError(true);
//       setUserInfo([]);
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   function handleKeyDown(event) {
//     if (event.keyCode === 13) {
//       setIsTyping(false);
//       handleUserSearch();
//     }
//   }

//   function handleClick() {
//     setIsTyping(false);
//     handleUserSearch();
//   }

//   return {
//     searchTerm,
//     userInfo,
//     isTyping,
//     isLoading,
//     hasError,
//     handleChangeSearchTerm,
//     handleKeyDown,
//     handleClick,
//   };
// }

export default function useHome() {
  const [state, dispatch] = useReducer(homeReducer, initialHomeState);

  function handleChangeSearchTerm(event) {
    dispatch(actions.typing(event.target.value));
  }

  async function handleUserSearch() {
    const { searchTerm } = state;
    dispatch(actions.searching());
    try {
      const { items } = await UserService.getUserByName(searchTerm);
      dispatch(actions.infoSearched(items));
    } catch (error) {
      dispatch(actions.searchFailed());
    }
  }

  function submit() {
    dispatch(actions.submiting());
    handleUserSearch();
  }

  function handleKeyDown(event) {
    if (event.keyCode === 13) submit();
  }
  return {
    ...state,
    handleChangeSearchTerm,
    handleKeyDown,
    handleClick: submit,
  };
}
