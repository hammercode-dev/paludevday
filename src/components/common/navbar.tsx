"use client";
import { useState, useEffect } from "react";
import { navLists } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 z-30 w-full bg-transparent transition-all duration-300 max-md:hidden",
        isScrolled && "backdrop-blur-md"
      )}
    >
      <div className="mx-auto max-w-6xl p-5">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/assets/logos/ic_pdd26.svg"
              alt="pdd-2024-logo"
              width={42}
              height={42}
              className="filter-[drop-shadow(0_0_12px_rgba(216,126,255,0.3))] md:h-14 md:w-14"
            />
          </Link>

          {/* Lists */}
          <ul className="flex items-center gap-6">
            {navLists.map((nav) => (
              <Link key={nav.id} href={nav.navigate_url}>
                <li className="group text-pdd-light hover:text-pdd-purple relative cursor-pointer font-medium transition-colors duration-300">
                  {nav.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
