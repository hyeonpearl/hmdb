import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styled from '@emotion/styled';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import { common } from '@/styles/common';

export default function Header() {
  return (
    <StyledHeader>
      <Link href={'/'} className='logo'>
        <Image src={'/logo_blank.svg'} width={160} height={62.5} alt='logo' />
      </Link>

      <nav>
        <div className='drop_movie'>
          <span>영화</span>
          <div className='movie_content'>영화</div>
        </div>

        <div className='drop_tv'>
          <span>TV&nbsp;시리즈</span>
          <div className='tv_content'>시리즈</div>
        </div>

        <div className='drop_search'>
          <SearchRoundedIcon />
          <div className='search_content'>검색</div>
        </div>
      </nav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0.8;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  background: ${common.color.gray01};

  @media screen and (max-width: 600px) {
    padding: 0 1rem;

    a img {
      width: 100px;
    }
  }

  nav {
    display: flex;
    align-items: center;

    div.drop_movie,
    div.drop_tv,
    div.drop_search {
      height: 100%;

      span,
      svg {
        padding: 1rem;
        color: ${common.color.white};
        cursor: pointer;

        :hover {
          color: ${common.color.gray_hover};
        }
      }

      div {
        display: none;
        position: fixed;
        top: 66px;
        left: 0;
        right: 0;
        height: 50%;
        background: ${common.color.gray01};
        z-index: 1;
      }
    }
  }
`;
