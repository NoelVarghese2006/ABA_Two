"use client";

import {Link} from "@nextui-org/link";

import '@styles/menu.css';

// export const ABALogo = () => {
//   return (
//     <h1 className="Logo">ABA</h1>
//   );
// };

const menuLinks = [
  {path: "/", label: "Home"},
  {path: "/about", label: "About"}
];

export default function Menu() {
  return (
    <header className="navbar">
      <div className="logo">
        <Link href="/" className="link"><h1>ABA</h1></Link>
      </div>
      <div className="menuChoices">
        <Link href="/about" className="link">About</Link>
        <Link href="/meetings" className="link">Meetings</Link>
        <Link href="/beliefs" className="link">We Believe</Link>
        <Link href="/contact" className="link">Contact Us</Link>
      </div>
    </header>
  );
}
