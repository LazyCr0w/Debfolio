import dayjs from "dayjs";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

import { getIcon, Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import type { Certification } from "../../types/certifications";

export function CertificationItem({
  className,
  certification,
}: {
  className?: string;
  certification: Certification;
}) {
  const imageUrl = certification.badgeImageURL || certification.issuerLogoURL;

  return (
    <div className={cn("group/cert flex items-center pr-2", className)}>
      {certification.badgeURL ? (
        <a
          href={certification.badgeURL}
          target="_blank"
          rel="noopener"
          className="mx-4 flex size-6 shrink-0 select-none"
        >
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={`${certification.issuer} badge`}
              width={32}
              height={32}
              quality={100}
              className="size-6"
              unoptimized
              aria-hidden
            />
          ) : (
            <div className="flex size-6 items-center justify-center [&_svg]:size-5 [&_svg]:text-muted-foreground">
              {getIcon(certification.issuerIconName) ?? <Icons.certificate />}
            </div>
          )}
        </a>
      ) : (
        <div className="mx-4 flex size-6 shrink-0 select-none">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={certification.issuer}
              width={32}
              height={32}
              quality={100}
              className="size-6"
              unoptimized
              aria-hidden
            />
          ) : (
            <div className="flex size-6 items-center justify-center [&_svg]:size-5 [&_svg]:text-muted-foreground">
              {getIcon(certification.issuerIconName) ?? <Icons.certificate />}
            </div>
          )}
        </div>
      )}

      {certification.credentialURL ? (
        <a
          className="flex-1 space-y-1 border-l border-dashed border-edge p-4 pr-2 group/cert-link"
          href={certification.credentialURL}
          target="_blank"
          rel="noopener"
        >
          <h3 className="leading-snug font-medium text-balance underline-offset-4 group-hover/cert-link:underline">
            {certification.title}
          </h3>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
            <dl>
              <dt className="sr-only">Issued by</dt>
              <dd>
                <span aria-hidden>@</span>
                <span className="ml-0.5">{certification.issuer}</span>
              </dd>
            </dl>

            <Separator
              className="data-[orientation=vertical]:h-4"
              orientation="vertical"
            />

            <dl>
              <dt className="sr-only">Issued on</dt>
              <dd>
                <time dateTime={dayjs(certification.issueDate).toISOString()}>
                  {dayjs(certification.issueDate).format("DD.MM.YYYY")}
                </time>
              </dd>
            </dl>
          </div>
        </a>
      ) : (
        <div className="flex-1 space-y-1 border-l border-dashed border-edge p-4 pr-2">
          <h3 className="leading-snug font-medium text-balance">
            {certification.title}
          </h3>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
            <dl>
              <dt className="sr-only">Issued by</dt>
              <dd>
                <span aria-hidden>@</span>
                <span className="ml-0.5">{certification.issuer}</span>
              </dd>
            </dl>

            <Separator
              className="data-[orientation=vertical]:h-4"
              orientation="vertical"
            />

            <dl>
              <dt className="sr-only">Issued on</dt>
              <dd>
                <time dateTime={dayjs(certification.issueDate).toISOString()}>
                  {dayjs(certification.issueDate).format("DD.MM.YYYY")}
                </time>
              </dd>
            </dl>
          </div>
        </div>
      )}

      {certification.credentialURL && (
        <a
          href={certification.credentialURL}
          target="_blank"
          rel="noopener"
          className="flex items-center"
        >
          <ArrowUpRightIcon
            className="size-4 text-muted-foreground"
            aria-hidden
          />
        </a>
      )}
    </div>
  );
}
