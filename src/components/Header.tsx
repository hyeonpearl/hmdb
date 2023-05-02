import styled from '@emotion/styled';
import { AppBar, Container, Grid, Toolbar } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <StyledAppBar>
      <Container maxWidth='lg'>
        <StyledToolbar>
          <Link href={'/'} className='logo'>
            <Image
              src={'/logo_blank.svg'}
              width={140}
              height={62.5}
              alt='logo'
            />
          </Link>

          <nav>
            <Grid container alignItems={'center'} spacing={8}>
              <Grid item xs={4}>
                <Item href={'/test'}>Trending</Item>
              </Grid>
              <Grid item xs={4}>
                <Item href={'/test'}>Popular</Item>
              </Grid>
              <Grid item xs={4}>
                <Item href={'/test'}>Top&nbsp;Rate</Item>
              </Grid>
            </Grid>
          </nav>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
}

const StyledAppBar = styled(AppBar)`
  background: #323232;
  position: relative;
`;

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

const Item = styled(Link)`
  text-decoration: none;
  color: #fff;
  width: 6rem;

  :hover {
    color: #ccc;
  }
`;
