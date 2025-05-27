export default function About() {
    return (
      <div className="justify-items-center pb-content h-min-screen sm:h-[calc(100vh-2.5rem)]">
        <main className="grid sm:max-w-1/2 text-center sm:text-justify pt-42 flex-grow">
          <a className="text-sm vhsm">I'm a mexican electric engineer living in Madrid, Spain.</a>
          <a className="text-sm vhsm">
            I usually spend my time reading and having fun automating boring things. I've been involved in the Crypto ecosystem for about 6 years.
            I really believe that Blockchain can change our current understanding of how money works and empower individuals over centralized authorities.          
          </a>
          <h1 className="text-sm font-bold mt-18 sm:mt-16 mb-8 sm:mb-4 text-center sm:text-left vhs">
            teams where I have collaborated:
          </h1>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 justify-items-center sm:justify-items-start">
            <img className="glitch" src="./bitso.png" height="50" width="50" alt=""/>
            <img className="glitch" src="./cardano.png" height="50" width="50" alt=""/>
            <img className="glitch" src="./iohk.png" height="50" width="50" alt=""/>
            <img className="glitch" src="./mina.png" height="50" width="50" alt=""/>
            <img className="glitch" src="./mlabs.png" height="50" width="50" alt=""/>
            <img className="glitch" src="./wanchain.png" height="40" width="40" alt=""/>
          </div>
          <h1 className="text-sm font-bold mt-18 sm:mt-16 mb-8 sm:mb-4 vhs">
            my skills
          </h1>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 sm:gap-x-12 sm:gap-y-2 ">
            <div className="grid grid-rows-2 text-xs">
              <a className="vhsm">delivery</a>
              <div className="flex h-3 overflow-hidden rounded text-xs border-1 glitch">
                <div className="bg-(--foreground2) w-9/10 text-(--background) glitch"></div>
              </div>
            </div>
            <div className="grid grid-rows-2 text-xs">
              <a className="vhsm">agile</a>
              <div className="flex h-3 overflow-hidden rounded text-xs border-1 glitch">
                <div className="bg-(--foreground2) w-8/10 text-(--background) glitch"></div>
              </div>
            </div>
            <div className="grid grid-rows-2 text-xs">
              <a className="vhsm">operations</a>
              <div className="flex h-3 overflow-hidden rounded text-xs border-1 glitch">
                <div className="bg-(--foreground2) w-9/10 text-(--background) glitch"></div>
              </div>
            </div>
            <div className="grid grid-rows-2 text-xs">
              <a className="vhsm">blockchain</a>
              <div className="flex h-3 overflow-hidden rounded text-xs border-1 glitch">
                <div className="bg-(--foreground2) w-8/10 text-(--background) glitch"></div>
              </div>
            </div>
            <div className="grid grid-rows-2 text-xs">
              <a className="vhsm">dApps</a>
              <div className="flex h-3 overflow-hidden rounded text-xs border-1 glitch">
                <div className="bg-(--foreground2) w-8/10 text-(--background) glitch"></div>
              </div>
            </div>
            <div className="grid grid-rows-2 text-xs">
              <a className="vhsm">deFi</a>
              <div className="flex h-3 overflow-hidden rounded text-xs border-1 glitch">
                <div className="bg-(--foreground2) w-7/10 text-(--background) glitch"></div>
              </div>
            </div>
            <div className="grid grid-rows-2 text-xs">
              <a className="vhsm">l2 scaling</a>
              <div className="flex h-3 overflow-hidden rounded text-xs border-1 glitch">
                <div className="bg-(--foreground2) w-8/10 text-(--background) glitch"></div>
              </div>
            </div>
            <div className="grid grid-rows-2 text-xs">
              <a className="vhsm">cex</a>
              <div className="flex h-3 overflow-hidden rounded text-xs border-1 glitch">
                <div className="bg-(--foreground2) w-7/10 text-(--background) glitch"></div>
              </div>
            </div>
            <div className="grid grid-rows-2 text-xs">
              <a className="vhsm">zK</a>
              <div className="flex h-3 overflow-hidden rounded text-xs border-1 glitch">
                <div className="bg-(--foreground2) w-7/10 text-(--background) glitch"></div>
              </div>
            </div>
          </div>
          <h1 className="text-sm font-bold mt-18 sm:mt-16 mb-8 sm:mb-4 vhs">
            highlight projects
          </h1>
          <div className="grid grid-cols-3 gap-6 justify-items-center sm:max-w-1/2 sm:justify-items-start">
            <img className="glitch" src="./mithril.png" height="50" width="50" alt=""/>
            <img className="glitch" src="./hydra.png" height="50" width="50" alt=""/>
            <img className="glitch" src="./singularity.png" height="50" width="50" alt=""/>
          </div>       
        </main>
      </div>
    );
  }