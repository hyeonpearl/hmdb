import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styled from '@emotion/styled';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import { common } from '@/styles/common';

export default function Header() {
  return (
    <StyledHeader>
      <Link href={'/'} className='logo'>
        <Image src={'/logo_blank.svg'} width={160} height={62.5} alt='logo' />
      </Link>

      <nav>
        <span>Movies</span>
        <span>TV&nbsp;Show</span>
        <SearchRoundedIcon />
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

  @media screen and (max-width: 390px) {
    a img {
      width: 100px;
    }
  }

  nav {
    display: flex;
    align-items: center;

    span,
    svg {
      padding: 1rem;
      color: ${common.color.white};
      cursor: pointer;

      :hover {
        color: ${common.color.gray_hover};
      }
    }
  }
`;
