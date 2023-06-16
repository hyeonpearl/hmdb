import styled from '@emotion/styled';

import { common } from '@/styles/theme/common';

export const CategoryMain = styled.main`
  background: ${common.color.white};
  margin-top: 66px;
  padding: 0 3rem;

  h3 {
    padding: 5rem 0;
    text-align: center;
    font-size: 4rem;

    span {
      color: ${common.color.black};
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
        transition: color 0.3s ease;
      }
    }
  }
`;
