import styled from '@emotion/styled';
import { Skeleton } from '@mui/material';

import { common } from '@/styles/common';

export default function Movie({ title }: { title: string }) {
  return (
    <StyledSection>
      <h3>{title}</h3>
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
    </StyledSection>
  );
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const StyledSection = styled.section`
  h3 {
    font-size: 2rem;
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
