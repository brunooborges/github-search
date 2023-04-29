/* eslint-disable no-empty */
import React from 'react';

import Button from '../../components/Button';
import ErrorStatus from '../../components/ErrorStatus';
import Loader from '../../components/Loader';
import SearchInput from '../../components/SearchInput';
import UserInfo from '../../components/UserInfo';

import { Container } from './styles';

import useHome from './useHome';

export default function Home() {
  const {
    searchTerm,
    userInfo,
    isTyping,
    isLoading,
    hasError,
    handleChangeSearchTerm,
    handleKeyDown,
    handleClick,
  } = useHome();

  const hasInfo = !isLoading && !hasError && userInfo && searchTerm;

  const searchError =
    (hasError && userInfo?.length < 1 && !isTyping && !isLoading) ||
    (!hasError && userInfo?.length < 1 && !isTyping && !isLoading && searchTerm);

  return (
    <Container>
      <SearchInput
        value={searchTerm}
        onChange={handleChangeSearchTerm}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
        disabled={isLoading}
      />
      <Button
        onClick={handleClick}
        disabled={isLoading}
      />
      {isLoading && <Loader />}
      {searchError && <ErrorStatus searchTerm={searchTerm} />}
      {hasInfo && <UserInfo infos={userInfo} />}
    </Container>
  );
}
