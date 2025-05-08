import { socialLinks } from "../data";
import { FaXTwitter, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa6";

function SocialLink({ href, icon: Icon }) {
  return (
    <a className="transition-all duration-300 hover:scale-120" href={href} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-xl gap-10 glitch">
      <SocialLink href={socialLinks.twitter} icon={FaXTwitter} />
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedin} />
      <SocialLink href={socialLinks.discord} icon={FaDiscord} />
    </div>
  );
}

export default function Contact() {
  return (
    <div className="justify-items-center pb-content sm:mt-18">
      <main className="grid w-full sm:grid-cols-2 sm:max-w-1/2">
        <div className="text-center sm:text-left">
          <p className="text-sm mb-16 vhsm">Reach out to me on my networks! :</p>
        </div>
        <div className="sm:justify-items-start justify-items-center">
        <SocialLinks/>
        </div>
      </main>
    </div>
  );
}