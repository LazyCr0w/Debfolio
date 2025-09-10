import dayjs from "dayjs";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

import { getIcon, Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import type { Education } from "../../types/education";

export function EducationItem({
  className,
  education,
}: {
  className?: string;
  education: Education;
}) {
  return (
    <a
      className={cn("group/edu flex items-center pr-2", className)}
      href={education.credentialURL}
      target="_blank"
      rel="noopener"
    >
      {education.institutionLogoURL ? (
        <Image
          src={education.institutionLogoURL}
          alt={education.institution}
          width={32}
          height={32}
          quality={100}
          className="mx-4 flex size-6 shrink-0 select-none"
          unoptimized
          aria-hidden
        />
      ) : (
        <div
          className="mx-4 flex size-6 shrink-0 items-center justify-center select-none [&_svg]:size-5 [&_svg]:text-muted-foreground"
          aria-hidden
        >
          {getIcon(education.institutionIconName) ?? <Icons.certificate />}
        </div>
      )}

      <div className="flex-1 space-y-1 border-l border-dashed border-edge p-4 pr-2">
        <h3 className="leading-snug font-medium text-balance underline-offset-4 group-hover/edu:underline">
          {education.title}
        </h3>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
          <dl>
            <dt className="sr-only">Institution</dt>
            <dd>
              <span aria-hidden>@</span>
              <span className="ml-0.5">{education.institution}</span>
            </dd>
          </dl>

          <Separator
            className="data-[orientation=vertical]:h-4"
            orientation="vertical"
          />

          <dl>
            <dt className="sr-only">Graduated on</dt>
            <dd>
              <time dateTime={dayjs(education.graduationDate).toISOString()}>
                {dayjs(education.graduationDate).format("DD.MM.YYYY")}
              </time>
            </dd>
          </dl>
        </div>
      </div>

      {education.credentialURL && (
        <ArrowUpRightIcon
          className="size-4 text-muted-foreground"
          aria-hidden
        />
      )}
    </a>
  );
}