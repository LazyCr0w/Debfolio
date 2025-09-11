import { Icons } from "@/components/icons";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className={cn(
        "screen-line-before mx-auto border-x border-b border-edge pt-4 md:max-w-5xl",
        "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
        "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
        "bg-zinc-950/0.75 dark:bg-white/0.75"
      )}>
        {/* Connect Section */}
        <div className="mb-6">
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

        <p className="mb-4 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          This project was inspired by{" "}
          <a
            className="link"
            href="https://github.com/ncdai/chanhdai.com"
            target="_blank"
            rel="noopener"
          >
            Chanh Dai
          </a>{" "}
          and is licensed under the MIT License.
        </p>

      </div>
      {/* Full-width bottom border with connecting elements */}
      <div className="relative w-full border-b border-edge">
        <div className="absolute left-0 top-0 h-px bg-edge w-full"></div>
      </div>
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-2" />
      </div>
    </footer>
  );
}

