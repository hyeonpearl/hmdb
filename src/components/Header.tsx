import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styled from '@emotion/styled';
import { AppBar, Container, Toolbar } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import { common } from '@/styles/common';

export default function Header() {
  return (
    <StyledAppBar>
      <Container maxWidth='lg'>
        <StyledToolbar>
          <Link href={'/'} className='logo'>
            <Image
              src={'/logo_blank.svg'}
              width={160}
              height={62.5}
              alt='logo'
            />
          </Link>

          <nav>
            <span>Movies</span>
            <span>TV&nbsp;Show</span>
            <SearchRoundedIcon />
          </nav>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
}

const StyledAppBar = styled(AppBar)`
  background: ${common.color.gray01};
  position: fixed;
  opacity: 0.8;
`;

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
  align-items: center;

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
