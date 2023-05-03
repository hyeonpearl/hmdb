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
            <Grid container alignItems={'center'} spacing={8}>
              <Grid item xs={4}>
                <Item href={'/test'}>영화</Item>
              </Grid>
              <Grid item xs={4}>
                <Item href={'/test'}>TV&nbsp;프로그램</Item>
              </Grid>
            </Grid>
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
  color: ${common.color.white};

  :hover {
    color: ${common.color.gray_hover};
  }
`;
