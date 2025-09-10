"use client";

import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/features/profile/data/projects";

import { Panel, PanelHeader, PanelTitle } from "./panel";

export function Blog() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const displayedProjects = showAllProjects ? PROJECTS : PROJECTS.slice(0, 2);
  const hasMoreProjects = PROJECTS.length > 2;

  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>Projects</PanelTitle>
      </PanelHeader>

      <div className="relative py-4">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {displayedProjects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>

      {hasMoreProjects && (
        <div className="screen-line-before flex justify-center py-2">
          <Button
            variant="default"
            onClick={() => setShowAllProjects(!showAllProjects)}
          >
            {showAllProjects ? "Show Less" : "Show More Projects"}
            {showAllProjects ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Button>
        </div>
      )}
    </Panel>
  );
}

function ProjectItem({ project }: { project: typeof PROJECTS[0] }) {
  return (
    <Link
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group/project flex flex-col gap-2 p-2 max-sm:screen-line-before max-sm:screen-line-after sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
    >
      {(project.screenshot || project.logo) && (
        <div className="relative select-none [&_img]:aspect-video [&_img]:rounded-xl">
          <img
            src={project.screenshot || project.logo}
            alt={project.screenshot ? `${project.title} website preview` : `${project.title} logo`}
            className="w-full rounded-xl object-cover object-top"
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />
        </div>
      )}

      <div className="flex flex-col gap-1 p-2">
        <h3 className="text-lg leading-snug font-medium text-balance underline-offset-4 group-hover/project:underline">
          {project.title}
        </h3>


        {project.skills && project.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1">
            {project.skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="inline-block rounded-md bg-muted px-1.5 py-0.5 text-xs font-medium"
              >
                {skill}
              </span>
            ))}
            {project.skills.length > 3 && (
              <span className="text-xs text-muted-foreground">
                +{project.skills.length - 3} more
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
