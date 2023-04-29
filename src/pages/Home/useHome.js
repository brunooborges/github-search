import { useState } from 'react';

import UserService from '../../services/UserService';

export default function useHome() {
  const [searchTerm, setSearchTerm] = useState('');
  const [userInfo, setUserInfo] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  function handleChangeSearchTerm(event) {
    setIsTyping(true);

    if (!searchTerm) {
      setUserInfo();
      setSearchTerm(event.target.value);
    } else {
      setSearchTerm(event.target.value);
    }
  }

  async function handleUserSearch() {
    try {
      setIsLoading(true);

      // const accessToken = 'Insert your Github access token here';

      const headers = {
        Accept: 'application/vnd.github+json',
        // Authorization: `Bearer ${accessToken}`,
      };

      const { items } = await UserService.getUserByName(searchTerm, headers);

      setHasError(false);
      setUserInfo(items);
    } catch {
      setHasError(true);
      setUserInfo([]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      setIsTyping(false);
      handleUserSearch();
    }
  }

  function handleClick() {
    setIsTyping(false);
    handleUserSearch();
  }

  return {
    searchTerm,
    userInfo,
    isTyping,
    isLoading,
    hasError,
    handleChangeSearchTerm,
    handleKeyDown,
    handleClick,
  };
}
