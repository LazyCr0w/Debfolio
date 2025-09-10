import Link from "next/link";

import { NavItemGitHub } from "@/components/nav-item-github";
import { NavItemLinkedIn } from "@/components/nav-item-linkedin";
import { NavItemX } from "@/components/nav-item-x";
import { cn } from "@/lib/utils";

import { SiteHeaderWrapper } from "./site-header-wrapper";
import { ToggleTheme } from "./toggle-theme";

export function SiteHeader() {

  return (
    <SiteHeaderWrapper
      className={cn(
        "sticky inset-0 top-0 z-50 max-w-screen overflow-x-hidden bg-background px-2 pt-2",
        "data-[affix=true]:shadow-[0_0_16px_0_black]/8 dark:data-[affix=true]:shadow-[0_0_16px_0_black]/80",
        "not-dark:data-[affix=true]:**:data-header-container:after:bg-border",
        "transition-shadow duration-300"
      )}
    >
      <div
        className="screen-line-before screen-line-after mx-auto flex h-12 items-center justify-between gap-2 border-x border-edge px-2 after:z-1 after:transition-[background-color] sm:gap-4 md:max-w-5xl"
        data-header-container
      >
        <Link href="/" aria-label="Home" className="font-semibold text-xl">
          Debfolio
        </Link>

        <div className="flex-1" />

        <div className="flex items-center gap-2">
          <NavItemLinkedIn />
          <NavItemGitHub />
          <NavItemX />
          <ToggleTheme />
        </div>
      </div>
    </SiteHeaderWrapper>
  );
}
