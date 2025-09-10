import React from "react";

import { Button } from "@/components/ui/button";

import { Icons } from "./icons";

export function NavItemLinkedIn() {
  return (
    <Button variant="outline" size="icon" asChild>
      <a href="https://www.linkedin.com/in/sumon-deb-742346314/" target="_blank" rel="noopener">
        <Icons.linkedin />
        <span className="sr-only">LinkedIn</span>
      </a>
    </Button>
  );
}