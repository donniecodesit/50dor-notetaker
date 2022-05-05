import React from 'react';
import Search from './Search';

export default function Header() {
  return (
    <div>
        <div className="header-text">Note Taker Application</div>
        <Search />
    </div>
  )
}