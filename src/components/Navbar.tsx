import React from 'react';
import Link from 'next/link';
import logo from '../../static/icons/logo.png';
import { Button } from '../tokens/Button';
import { SearchBox } from './SearchBox';
import { StarIcon } from '../assets/Icons';

export interface Props {
  onSearch: (value: string) => void;
  className?: string;
  activeHref?: string;
}

export const Navbar = ({ onSearch, className, activeHref }: Props) => (
  <nav className={`max-w-7xl space-y-10 mx-auto ${className}`}>
    <div className="flex h-[80px] items-end">
      <img src={logo} alt="Logo" className="-translate-y-[30%]" />
      <ul className="flex ml-28 items-center self-stretch gap-x-5 font-medium text-[22px]">
        <Href
          text="Personal"
          href="personal"
          isActive={activeHref === 'personal'}
        />
        <Href
          text="Business"
          href="business"
          isActive={activeHref === 'business'}
        />
        <Href
          text="About Us"
          href="about_us"
          isActive={activeHref === 'about_us'}
        />
      </ul>
      <div className="flex items-center gap-x-10 ml-auto">
        <Button
          icon={<StarIcon />}
          variant="outline"
          className="rounded-md px-4 py-2"
        >
          <div className="flex flex-col leading-none items-start font-medium">
            <span>My</span>
            <span>Ooredoo</span>
          </div>
        </Button>
        <Link href="/e-strom">E Strom</Link>
        <Link href="/partners">Partners</Link>
      </div>
    </div>

    <div className="flex justify-end">
      <SearchBox
        placeholder="Find anything..."
        buttonText="Search"
        onClick={onSearch}
        className="translate-x-4 w-[340px]"
      />
      <Button variant="outline" className="px-4 ml-6 rounded-md">
        ENG
      </Button>
    </div>
  </nav>
);

const Href = ({
  text,
  href,
  isActive,
}: {
  text: string;
  href: string;
  isActive: boolean;
}) => {
  return (
    <li
      className={`rounded-b-md h-full flex justify-center items-end transition-colors ${
        isActive ? 'bg-primary-red text-white' : 'hover:bg-primary-cherry/10'
      }`}
    >
      <Link href={href}>
        <a className="h-full px-4 flex justify-center items-end pb-3">{text}</a>
      </Link>
    </li>
  );
};
