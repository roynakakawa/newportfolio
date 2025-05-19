import { socialLinks } from "../data";
import { FaXTwitter, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa6";

function SocialLinks() {
  return (
    <div className="flex text-xl gap-10 glitch">
      <a className="transition-all duration-300 hover:scale-120" href={socialLinks.twitter} target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
      <a className="transition-all duration-300 hover:scale-120" href={socialLinks.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a className="transition-all duration-300 hover:scale-120" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a className="transition-all duration-300 hover:scale-120" href={socialLinks.discord} target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="justify-items-center pb-content h-[calc(100vh-6rem)] sm:h-[calc(100vh-2.5rem)]">
      <main className="grid w-full sm:grid-cols-2 sm:max-w-1/2 pt-42">
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