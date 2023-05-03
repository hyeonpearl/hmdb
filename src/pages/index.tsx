import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Container } from '@mui/material';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

import { common } from '@/styles/common';
import SEO from '@/components/SEO';
import Search from '@/components/Search';
import Movie from '@/components/Movie';
import TVShow from '@/components/TVShow';

export default function Home() {
  return (
    <main>
      <SEO title='Home' />

      <IntroContainer fixed>
        <StyledIntroduce>
          <strong>Welcome</strong>
          This is movie database
          <strong>for you.</strong>
        </StyledIntroduce>
        <Search />
        <ExpandMoreRoundedIcon />
      </IntroContainer>

      <Container fixed>
        <Movie title='Trend Movies' />
        <Movie title='Popular Movies' />
        <TVShow />
      </Container>
    </main>
  );
}

const floating = keyframes`
  0% {
    
    transform: translateY(0);    
  }
  50% {
    
    transform: translateY(-15px);
  }
  100% {
    
    transform: translateY(0);
  }
`;

const IntroContainer = styled(Container)`
  height: 100vh;
  text-align: center;

  svg {
    margin-top: 5rem;
    font-size: 5rem;
    color: ${common.color.gray06};
    animation: ${floating} 2s ease infinite;

    @media screen and (max-width: 600px) {
      font-size: 3rem;
    }
  }
`;

const StyledIntroduce = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  padding: 1.5rem;
  margin-bottom: 5rem;

  @media screen and (max-width: 1200px) {
    font-size: 4.5rem;
  }

  @media screen and (max-width: 900px) {
    font-size: 3rem;
    margin: 5rem 0;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.75rem;
  }

  @media screen and (max-width: 360px) {
    font-size: 1.5rem;
  }

  strong {
    background: linear-gradient(
      to right,
      ${common.color.green},
      ${common.color.yellow}
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;
