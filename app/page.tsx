import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import {User} from "@nextui-org/user";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { InstagramIcon, ParagraphIcon } from "hugeicons-react";

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


      <div className="flex gap-3">
        <span className={subtitle()}>Created by:</span>
      <User   
      name="Nick DiCristo"
      description={(
        <Link href="https://www.linkedin.com/in/nicholas-dicristo/" size="sm" isExternal>
          @ndicristo27
        </Link>
      )}
      avatarProps={{
        src: "https://media.licdn.com/dms/image/v2/D5635AQEUM2iTfcjqvw/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1692225881272?e=1729497600&v=beta&t=2i9qsLwX9YSOo9ZFhQmhiklxTrUI-NL-2-xlECv3VMM"
      }}
    />
    <User   
      name="Mason Maeder"
      description={(
        <Link href="https://www.linkedin.com/in/mason-maeder/" size="sm" isExternal>
          @masonmaeder
        </Link>
      )}
      avatarProps={{
        src: "https://www.masonmaeder.com/assets/images/me.jpeg"
      }}
    />
      </div>
    </section>
  );
}
