import { ChangeEvent, KeyboardEvent, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { StyledHeader } from '@/styles/components/Header.styles';

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

interface Dropdowns {
  movie: boolean;
  tv: boolean;
  search: boolean;
  close: boolean;
}

interface ComponentProps {
  dropdowns: Dropdowns;
  toggleDropdown: (dropdownName: keyof Dropdowns) => void;
  inputValue: string;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  onClearInput: () => void;
  color?: string;
}

export default function Header({
  dropdowns,
  toggleDropdown,
  inputValue,
  onInputChange,
  onKeyDown,
  onClearInput,
  color,
}: ComponentProps) {
  useEffect(() => {
    window.addEventListener('scroll', () => toggleDropdown('close'));

    return () =>
      window.removeEventListener('scroll', () => toggleDropdown('close'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledHeader dropdowns={dropdowns} inputValue={inputValue} color={color}>
      <Link href={'/'} className='logo'>
        <Image src={'/logo_blank.svg'} width={160} height={62.5} alt='logo' />
      </Link>

      <nav>
        <ul>
          <li>
            <span
              onMouseOver={() => toggleDropdown('movie')}
              onClick={() => toggleDropdown('movie')}
              className='menu_btn'
            >
              영화
            </span>
            {dropdowns.movie && (
              <div className='menu_wrap'>
                <div
                  className='content movie'
                  onMouseLeave={() => toggleDropdown('close')}
                >
                  <div className='menu_title'>영화 탐색</div>
                  <ul>
                    <li onClick={() => toggleDropdown('close')}>
                      <Link href={'/movie/popular'}>인기순</Link>
                    </li>
                    <li onClick={() => toggleDropdown('close')}>
                      <Link href={'/movie/top_rated'}>높은 평점</Link>
                    </li>
                    <li onClick={() => toggleDropdown('close')}>
                      <Link href={'/movie/now_playing'}>현재 상영 중</Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>

          <li>
            <span
              onMouseOver={() => toggleDropdown('tv')}
              onClick={() => toggleDropdown('tv')}
              className='menu_btn'
            >
              TV&nbsp;시리즈
            </span>
            {dropdowns.tv && (
              <div className='menu_wrap'>
                <div
                  className='content tv'
                  onMouseLeave={() => toggleDropdown('close')}
                >
                  <div className='menu_title'>TV 시리즈 탐색</div>
                  <ul>
                    <li onClick={() => toggleDropdown('close')}>
                      <Link href={'/tvShow/trending'}>트렌드</Link>
                    </li>
                    <li onClick={() => toggleDropdown('close')}>
                      <Link href={'/tvShow/top_rated'}>높은 평점</Link>
                    </li>
                    <li onClick={() => toggleDropdown('close')}>
                      <Link href={'/tvShow/on_air'}>TV 방영 중</Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>

          <li>
            <SearchRoundedIcon
              onClick={() => toggleDropdown('search')}
              className='menu_btn'
            />
            {dropdowns.search && (
              <div className='menu_wrap'>
                <div
                  className='content search'
                  onMouseLeave={() => toggleDropdown('close')}
                >
                  <div className='search_bar'>
                    <SearchRoundedIcon />
                    <input
                      type='text'
                      placeholder='영화, 드라마, 애니메이션 등등...'
                      value={inputValue}
                      onChange={onInputChange}
                      onKeyDown={onKeyDown}
                    />

                    <HighlightOffRoundedIcon
                      className='clear_input'
                      onClick={onClearInput}
                    />
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}
