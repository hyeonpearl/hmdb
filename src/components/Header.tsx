import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styled from '@emotion/styled';
import { AppBar, Container, Grid, Toolbar } from '@mui/material';

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
            <Item href={'/test'}>Movies</Item>
            <Item href={'/test'}>TV&nbsp;Show</Item>
          </nav>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
}

const StyledAppBar = styled(AppBar)`
  background: ${common.color.gray01};
  position: relative;
`;

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;

  @media screen and (max-width: 390px) {
    a img {
      width: 100px;
    }
  }
`;

const Item = styled(Link)`
  text-decoration: none;
  padding: 1rem;
  color: ${common.color.white};

  :hover {
    color: ${common.color.gray_hover};
  }

  :last-child {
    margin-left: 1rem;
  }
`;
