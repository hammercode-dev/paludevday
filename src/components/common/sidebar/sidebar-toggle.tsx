"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ListIcon } from "@phosphor-icons/react/dist/ssr";

type SidebarToggleProps = {
  setShowSidebar: (show: boolean) => void;
};

const SidebarToggle = ({ setShowSidebar }: SidebarToggleProps) => {
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
      className={`bg-primaryBlack-800 bg-opacity-0 fixed top-0 right-0 left-0 z-20 flex justify-between p-5 ${
        isScrolled && "bg-opacity-100"
      } border-b-primaryBlack-800 border-b transition-colors duration-300 md:hidden`}
    >
      <Link href="/">
        <Image
          src="/assets/logos/ic_pdd26.svg"
          alt="pdd-2024-logo"
          width={36}
          height={36}
        />
      </Link>
      <button
        className="rounded-md border border-white/60 px-2 py-1"
        onClick={() => setShowSidebar(true)}
      >
        <ListIcon className="size-5 text-white/60" />
      </button>
    </div>
  );
};

export default SidebarToggle;
