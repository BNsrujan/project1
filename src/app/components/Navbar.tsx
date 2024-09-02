"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/app/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div></div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Our-courses">
          <div>
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} item="Contact">
            <div></div>
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
