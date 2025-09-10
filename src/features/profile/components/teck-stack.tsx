import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";

import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function TeckStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:items-center">
          {/* Tech Stack Section */}
          <div className="md:pr-6">
            <ul className="flex flex-wrap gap-4 select-none justify-center">
              {TECH_STACK.map((tech) => {
                return (
                  <li key={tech.key} className="flex">
                    <SimpleTooltip content={tech.title}>
                      <a
                        href={tech.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={tech.title}
                      >
                        {tech.theme ? (
                          <>
                            <Image
                              src={`https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}-light.svg`}
                              alt={`${tech.title} light icon`}
                              width={32}
                              height={32}
                              className="hidden [html.light_&]:block"
                              unoptimized
                            />
                            <Image
                              src={`https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}-dark.svg`}
                              alt={`${tech.title} dark icon`}
                              width={32}
                              height={32}
                              className="hidden [html.dark_&]:block"
                              unoptimized
                            />
                          </>
                        ) : (
                          <Image
                            src={`https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}.svg`}
                            alt={`${tech.title} icon`}
                            width={32}
                            height={32}
                            unoptimized
                          />
                        )}
                        <span className="sr-only">{tech.title}</span>
                      </a>
                    </SimpleTooltip>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Links Section */}
          <div className="md:border-l md:border-edge md:pl-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Connect</h3>
            <div className="flex flex-row gap-4 items-center justify-center">
              <SimpleTooltip content="LinkedIn Profile">
                <a
                  href="https://www.linkedin.com/in/sumon-deb-742346314/"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0077B5] hover:bg-[#005885] transition-colors duration-200 text-white"
                >
                  <Icons.linkedin className="w-6 h-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </SimpleTooltip>
              <SimpleTooltip content="GitHub Profile">
                <a
                  href="https://github.com/LazyCr0w"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-[#333] hover:bg-[#24292e] transition-colors duration-200 text-white"
                >
                  <Icons.github className="w-6 h-6" />
                  <span className="sr-only">GitHub</span>
                </a>
              </SimpleTooltip>
              <SimpleTooltip content="X (Twitter) Profile">
                <a
                  href="https://x.com/sd_sumon_deb"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-[#000000] hover:bg-[#1a1a1a] transition-colors duration-200 text-white"
                >
                  <Icons.x className="w-6 h-6" />
                  <span className="sr-only">X (Twitter)</span>
                </a>
              </SimpleTooltip>
            </div>
          </div>
        </div>
      </PanelContent>
    </Panel>
  );
}
