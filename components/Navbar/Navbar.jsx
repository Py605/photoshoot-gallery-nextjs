import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="outer-div">
        <Link href="/">
            <h4>Capture</h4>
        </Link>
        <ul className='list-components'>
          <li>
            <Link href="/">
            Home
            </Link>
          </li>
          <li>
            <Link href="/work">
            Work
            </Link>
          </li>
          <li>
            <Link href="/contact">
            Contact
            </Link>
          </li>
          <li>
            <Link href="/gallery">
            Gallery
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
