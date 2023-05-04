import styled from '@emotion/styled';
import { Skeleton } from '@mui/material';

import { common } from '@/styles/common';

export default function TVShow() {
  return (
    <StyledArticle>
      <h3>
        <span>TV Show</span>
      </h3>
      <ul>
        {array.map((_, index) => (
          <li key={index}>
            <StyledSkeleton
              variant='rounded'
              width={210}
              height={300}
              key={index}
            />
            <StyledSkeleton variant='rounded' width={210} height={20} />
            <StyledSkeleton variant='rounded' width={100} height={20} />
          </li>
        ))}
      </ul>
    </StyledArticle>
  );
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const StyledArticle = styled.article`
  h3 {
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      cursor: pointer;

      :hover {
        background: linear-gradient(
          to right,
          ${common.color.green},
          ${common.color.yellow}
        );
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
      }
    }
  }

  ul {
    padding: 0;
    display: flex;
    overflow-x: scroll;

    li {
      list-style: none;
    }
    li:not(:first-child) {
      margin-left: 1rem;
    }
  }
`;

const StyledSkeleton = styled(Skeleton)`
  background: ${common.color.gray04};
  margin-bottom: 1rem;
`;
