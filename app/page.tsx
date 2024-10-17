import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { User } from "@nextui-org/user";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { InstagramIcon, ParagraphIcon } from "hugeicons-react";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import curlingbucky from '/curlingbucky.jpg'
import {
  TwitterIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
  RecwellIcon,
  CurlingBucky
} from "@/components/icons";

export default function Home() {
  return (
     <div className="bg-gradient-to-b from-[#C5050C] to-transparent dark:from-[#C5050C] relative text-center image-center h-max w-screen flex flex-col flex-wrap justify-center">
      <div className="flex-auto grow order-1		relative inset-x-0 top-0   ">
      <Image
      className="max-w-none"
            height={250}
            alt="d"
            width={250}
            src="https://github.com/uwcurling/uwcurling.org/blob/main/curlingbucky.jpg?raw=true">
            
    </Image>
    </div>
      <div className="flex-auto order-2 static inset-x-0 top-0">
      <span className={title()}>
            Competitive Curling at the University of Wisconsin
          </span>
          <span className={subtitle({ class: "mt-4" })}>
            Travel the nation and defend our 2024 National Championship!
          </span>
      <div className="space-x-3 py-8	">
            <Button className="bg-[#17202a]" color="primary" size="lg">
            <a href="/">Members</a>
            </Button>
            <Button className="bg-[#17202a]" color="primary" size="lg">
            <a href="/join">Join Club Curling!</a>
            </Button>
          </div>
          </div>
     </div>
  );
}
