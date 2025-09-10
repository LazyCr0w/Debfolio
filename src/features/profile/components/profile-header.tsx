import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";

import { Overview } from "./overview";
import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <div className="flex flex-col sm:flex-row border-x border-edge min-h-56 sm:min-h-64">
      <div className="flex flex-1 flex-col">
        <div className="sm:border-r-0">
          <h1 className="flex items-center justify-center sm:justify-start pl-4 pr-4 pt-4 text-5xl sm:text-7xl font-semibold">
            {USER.displayName}
            &nbsp;
            <SimpleTooltip content="Verified">
              <VerifiedIcon className="size-[0.6em] translate-y-px text-info select-none" />
            </SimpleTooltip>
          </h1>

          <div className="border-t border-edge py-4 pl-4 pr-4">
            <div className="flex justify-center sm:justify-start">
              <FlipSentences sentences={USER.flipSentences} />
            </div>
          </div>
  
          <div>
            <Overview />
          </div>
        </div>
      </div>

      <div className="flex justify-center sm:shrink-0 sm:w-70 sm:border-l border-edge pb-4 sm:pb-0 relative">
        <div
          className="absolute inset-0 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5"
        />
        <div className="mx-[2px] h-full overflow-hidden relative z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover object-top select-none"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>

      </div>
    </div>
  );
}
