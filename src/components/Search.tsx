import styled from '@emotion/styled';
import { TextField, Paper } from '@mui/material';

import { common } from '@/styles/common';

export default function Search() {
  return (
    <SearchContainer>
      <TextField
        fullWidth
        placeholder='영화, 드라마 등등...'
        sx={{
          '& .Mui-focused': {
            color: common.color.white,
          },
        }}
      />
    </SearchContainer>
  );
}

const SearchContainer = styled(Paper)`
  background: ${common.color.gray02};
  border-radius: 15px;
  margin: 0 5rem;

  @media screen and (max-width: 600px) {
    margin: 0 1rem;

    input {
      font-size: 0.75rem;
    }
  }

  input {
    color: ${common.color.gray06};
    border-radius: 15px;
    text-indent: 20px;
  }
  input::placeholder {
    color: ${common.color.gray06};
  }
`;
