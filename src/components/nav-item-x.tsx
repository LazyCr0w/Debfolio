import React from "react";

import { Button } from "@/components/ui/button";

import { Icons } from "./icons";

export function NavItemX() {
  return (
    <Button variant="outline" size="icon" asChild>
      <a href="https://x.com/sd_sumon_deb" target="_blank" rel="noopener">
        <Icons.x />
        <span className="sr-only">X (Twitter)</span>
      </a>
    </Button>
  );
}