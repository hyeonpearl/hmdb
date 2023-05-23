import { ChangeEvent, useState } from 'react';

import Header from '@/components/Header';

interface Dropdowns {
  movie: boolean;
  tv: boolean;
  search: boolean;
  close: boolean;
}

export default function HeaderContainer() {
  const [inputValue, setInputValue] = useState('');
  const [dropdowns, setDropdowns] = useState<Dropdowns>({
    movie: false,
    tv: false,
    search: false,
    close: false,
  });

  const toggleDropdown = (dropdownName: keyof Dropdowns) => {
    setDropdowns(prevState => {
      const updatedDropdowns: Dropdowns = {
        movie: false,
        tv: false,
        search: false,
        close: false,
      };

      if (prevState[dropdownName]) {
        return updatedDropdowns;
      } else {
        return {
          ...updatedDropdowns,
          [dropdownName]: true,
        };
      }
    });
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const onClearInput = () => setInputValue('');

  return (
    <Header
      dropdowns={dropdowns}
      toggleDropdown={toggleDropdown}
      inputValue={inputValue}
      onInputChange={onInputChange}
      onClearInput={onClearInput}
    />
  );
}
