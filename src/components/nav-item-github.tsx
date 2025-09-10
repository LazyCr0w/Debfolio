import React from "react";

import { Button } from "@/components/ui/button";

import { Icons } from "./icons";

export function NavItemGitHub() {
  return (
    <Button variant="outline" size="icon" asChild>
      <a href="https://github.com/LazyCr0w" target="_blank" rel="noopener">
        <Icons.github />
        <span className="sr-only">GitHub</span>
      </a>
    </Button>
  );
}
