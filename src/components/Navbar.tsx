import React from 'react';
import Link from 'next/link';
import logo from '../../static/icons/logo.png';
import { Button } from '../tokens/Button';
import { SearchBox } from './SearchBox';

export interface Props {
  onSearch: (value: string) => void;
  className?: string;
}

export const Navbar = ({ onSearch, className }: Props) => {
  return (
    <nav className={`space-y-8 max-w-7xl mx-auto py-5 ${className}`}>
      {/* first row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-20">
          <img src={logo} alt="Logo" className="-translate-y-2" />
          <ul className="flex items-center gap-x-10 font-bold">
            <li>
              <Link href="/personal">Personal</Link>
            </li>
            <li>
              <Link href="/business">Business</Link>
            </li>
            <li>
              <Link href="/aboutus">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-x-10">
          <Button
            variant="outline"
            className="rounded-[5px] px-4 py-1.5 font-medium text-left"
          >
            My
            <br />
            Ooreedoo
          </Button>
          <Link href="/e-strom">E Strom</Link>
          <Link href="/partners">Partners</Link>
        </div>
      </div>
      {/* second row */}
      <div className="flex justify-end">
        <SearchBox
          placeholder=""
          buttonText="Search"
          onClick={onSearch}
          className="translate-x-4"
        />
        <Button variant="outline" className="px-2 py-2">
          ENG
        </Button>
      </div>
    </nav>
  );
};
