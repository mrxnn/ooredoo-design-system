import React from 'react';

// Common icon props
interface IconProps {
  size?: number | string;
  color?: string;
}

export const StarIcon = ({ size = 18 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className="bi bi-star"
    viewBox="0 0 16 16"
    style={{ marginRight: '10px' }}
  >
    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />{' '}
  </svg>
);

export const ChevronUpIcon = ({
  size = 20,
  color = 'currentColor',
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

export const ChevronDownIcon = ({
  size = 20,
  color = 'currentColor',
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export const ChevronRightIcon = ({
  size = 20,
  color = 'currentColor',
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

export const CheckIcon = ({ size = 10, color = 'currentColor' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 10 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.72353 1.69213L3.99981 7.70935C3.63118 8.09688 3.03439 8.09688 2.6667 7.70935L0.275768 5.1968C-0.0919226 4.80927 -0.0919226 4.18187 0.275768 3.79434C0.644401 3.40779 1.24119 3.40779 1.60888 3.79434L3.33325 5.60714L8.39041 0.290652C8.7581 -0.0968841 9.35489 -0.0968841 9.72353 0.290652C10.0922 0.677198 10.0922 1.30459 9.72353 1.69213Z"
      fill={color}
    />
  </svg>
);

export const CrossIcon = ({ size = 10 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 1L1 21M1 1L21 21"
      stroke="#221E20"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
