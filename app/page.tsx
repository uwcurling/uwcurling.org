import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { InstagramIcon } from "hugeicons-react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Welcome to&nbsp;</span>
        <span className={title({ color: "red" })}>the future home&nbsp;</span>
        <br />
        <span className={title()}>
          of the UW-Madison Curling Club.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Good Curling!
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "default",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.instagram}
        >
          <InstagramIcon size={20}/>
          Instagram
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Made with love by <Code color="primary">Nick DiCristo and Mason Maeder</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
