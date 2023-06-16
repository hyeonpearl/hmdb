import styled from '@emotion/styled';

import { common } from '@/styles/theme/common';

export const HomeMain = styled.main`
  section {
    padding: 3rem;

    @media screen and (max-width: 600px) {
      padding: 1.5rem;
    }

    :first-of-type {
      margin-top: 66px;
      text-align: center;
    }

    :nth-of-type(odd) {
      background: ${common.color.black};
    }

    :nth-of-type(even) {
      background: ${common.color.white};
    }
  }
`;

export const HomeIntroduce = styled.h1`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 5rem;

  @media screen and (max-width: 1200px) {
    font-size: 4.5rem;
  }

  @media screen and (max-width: 900px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 2.25rem;
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
