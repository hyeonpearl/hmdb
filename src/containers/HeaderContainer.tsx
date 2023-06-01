import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useRouter } from 'next/router';

import Header from '@/components/Header';

interface Dropdowns {
  movie: boolean;
  tv: boolean;
  search: boolean;
  close: boolean;
}

export default function HeaderContainer({ color }: { color?: string }) {
  const [inputValue, setInputValue] = useState('');
  const [dropdowns, setDropdowns] = useState<Dropdowns>({
    movie: false,
    tv: false,
    search: false,
    close: false,
  });

  const router = useRouter();

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
    setInputValue('');
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push(`/search/${inputValue}`);
      toggleDropdown('close');
    }
  };

  const onClearInput = () => setInputValue('');

  return (
    <Header
      dropdowns={dropdowns}
      toggleDropdown={toggleDropdown}
      inputValue={inputValue}
      onInputChange={onInputChange}
      onKeyDown={onKeyDown}
      onClearInput={onClearInput}
      color={color}
    />
  );
}
