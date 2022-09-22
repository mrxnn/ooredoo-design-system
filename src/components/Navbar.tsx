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
  <nav className={`mx-auto max-w-7xl space-y-10 ${className}`}>
    <div className="flex h-[80px] items-end">
      <img src={logo} alt="Logo" className="-translate-y-[30%]" />
      <ul className="ml-28 flex items-center gap-x-5 self-stretch text-[22px] font-medium">
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
      <div className="ml-auto flex items-center gap-x-10">
        <Button
          icon={<StarIcon />}
          variant="outline"
          className="rounded-md px-3 py-2"
        >
          <div className="flex flex-col items-start font-medium leading-none">
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
        className="w-[340px] translate-x-4"
      />
      <Button variant="outline" className="ml-6 rounded-md px-4">
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
      className={`flex h-full items-end justify-center rounded-b-md transition-colors ${
        isActive ? 'bg-primary-red text-white' : 'hover:bg-primary-cherry/10'
      }`}
    >
      <Link href={href}>
        <a className="flex h-full items-end justify-center px-4 pb-3">{text}</a>
      </Link>
    </li>
  );
};
