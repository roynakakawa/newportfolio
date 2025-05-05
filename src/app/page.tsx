import Image from "next/image";

const dayName = (date, locale) => date.toLocaleDateString(locale, { weekday: 'long' });

export default function Home() {
  return (
    <div className="justify-items-center pb-content sm:mt-18">
      <main className="grid w-full sm:grid-cols-2 sm:max-w-1/2">
        <div className="text-center sm:text-left mb-12">
          <h1 className="mb-6 text-lg font-bold retro">Hello there! Happy {dayName(new Date())}</h1>
          <p className="mb-6 text-sm">I'm Roy Nakakawa</p>
          <p className="text-sm">I've been delivering projects for about 15 years</p>
          <p className="text-sm">and I have over 6 years in the Blockchain ecosystem</p>
        </div>
        <div className="justify-items-center">
          <Image
          src="/roy.png"
          alt="Roy"
          className="hover:opacity-50"
          width={130}
          height={130}
          />
        </div>
      </main>
    </div>
  );
}
