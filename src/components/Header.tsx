import { ChangeEvent, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

import { common } from '@/styles/common';

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
  onClearInput: () => void;
}

export default function Header({
  dropdowns,
  toggleDropdown,
  inputValue,
  onInputChange,
  onClearInput,
}: ComponentProps) {
  useEffect(() => {
    window.addEventListener('scroll', () => toggleDropdown('close'));

    return () =>
      window.removeEventListener('scroll', () => toggleDropdown('close'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledHeader dropdowns={dropdowns} inputValue={inputValue}>
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
                      <Link href={'/movie/now_playing'}>현재 상영 중</Link>
                    </li>
                    <li onClick={() => toggleDropdown('close')}>
                      <Link href={'/movie/popular'}>인기순</Link>
                    </li>
                    <li onClick={() => toggleDropdown('close')}>
                      <Link href={'/movie/top_rate'}>높은 평점</Link>
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
                <div className='content tv'>
                  <div className='menu_title'>TV 시리즈 탐색</div>
                  <ul>
                    <li onClick={() => toggleDropdown('close')}>
                      <Link href={'/tvShow/trending'}>트렌드</Link>
                    </li>
                    <li onClick={() => toggleDropdown('close')}>
                      <Link href={'/tvShow/top_rate'}>높은 평점</Link>
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

const backdropBlur = keyframes`
  from { backdrop-filter: blur(0); }
  to { backdrop-filter: blur(10px); }
`;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0.8;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  background: ${common.color.gray01};

  ${({ dropdowns, inputValue }: { dropdowns: Dropdowns; inputValue: string }) =>
    dropdowns.movie || dropdowns.tv || dropdowns.search
      ? css`
          background: ${common.color.black};
          transition: background 0.3s ease;
          opacity: 1;
        `
      : css`
          transition: background 0.3s ease;
        `}

  @media screen and (max-width: 600px) {
    padding: 0 1rem;

    a img {
      width: 100px;
    }
  }

  nav {
    ul {
      display: flex;
      align-items: center;

      li {
        .menu_btn {
          color: ${common.color.white};
          margin-left: 1rem;
          padding: 1rem;
          user-select: none;
          cursor: pointer;

          :hover {
            color: ${common.color.gray_hover};
          }
        }

        .menu_wrap {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: -1;

          ${({ dropdowns }) =>
            dropdowns.movie || dropdowns.tv || dropdowns.search
              ? css`
                  animation: ${backdropBlur} 0.3s ease;
                  backdrop-filter: blur(10px);
                `
              : null}

          .content {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: auto;
            background: ${common.color.black};
            z-index: 5;

            padding: 6rem 6rem 2rem 6rem;

            .menu_title {
              font-size: 0.9rem;
              color: ${common.color.gray03};
              margin-bottom: 0.5rem;
            }

            ul {
              display: flex;
              flex-direction: column;
              align-items: start;

              li {
                font-size: 1.5rem;
                font-weight: 600;
                padding: 0.5rem 0;

                a {
                  :hover {
                    color: ${common.color.gray_hover};
                    cursor: pointer;
                  }
                }
              }
            }
          }

          .search {
            .search_bar {
              display: flex;
              align-items: center;

              svg {
                font-size: 2rem;
                color: ${common.color.gray03};
              }

              input {
                width: 100%;
                font-size: 1.5rem;
                font-weight: 600;
                background: ${common.color.black};
                color: ${common.color.white};
                padding: 0.5rem;
              }

              .clear_input {
                padding: 1rem;
                font-size: 1.25rem;
                visibility: hidden;
                opacity: 0;
                cursor: pointer;

                :hover {
                  color: ${common.color.gray06};
                }
              }

              ${({ inputValue }) =>
                inputValue !== ''
                  ? css`
                      svg:first-of-type {
                        color: ${common.color.gray06};
                        transition: color 0.3s ease;
                      }

                      .clear_input {
                        visibility: visible;
                        opacity: 1;
                        transition: opacity 0.3s ease;
                      }
                    `
                  : css`
                      svg {
                        color: ${common.color.gray03};
                        transition: color 0.3s ease;
                      }
                    `}
            }
          }
        }
      }
    }
  }
`;
