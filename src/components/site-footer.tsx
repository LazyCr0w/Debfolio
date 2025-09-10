export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-before mx-auto border-x border-b border-edge pt-4 md:max-w-5xl">
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

