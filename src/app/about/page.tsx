import { skills, myInfo, myProjects } from "../data";

export default function About() {
    return (
      <div className="justify-items-center h-min-screen sm:h-[calc(100vh-2.5rem)]">
        <main className="grid sm:max-w-1/2 text-center sm:text-justify pt-42 flex-grow">
          <h1 className="text-sm font-bold mb-4 text-center sm:text-left glitch">
            a little bit about me :
          </h1>
          <a className="text-sm vhs">{myInfo.about}</a>
          <h1 className="text-sm font-bold mt-18 sm:mt-16 mb-4 text-center sm:text-left glitch">
            teams where I have collaborated :
          </h1>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 justify-items-center sm:justify-items-start">
            <img src="./bitso.png" height="50" width="50" alt="Bitso"/>
            <img src="./cardano.png" height="50" width="50" alt="Cardano"/>
            <img src="./dxc.png" height="50" width="50" alt="DXC Technology"/>
            <img src="./iog.png" height="50" width="50" alt="Input Output Global"/>
            <img src="./mina.png" height="50" width="50" alt="Mina"/>
            <img src="./mlabs.png" height="50" width="50" alt="Mlabs"/>
            <img src="./wanchain.png" height="50" width="50" alt="Wanchain"/>
            <img src="./baanx.png" height="50" width="50" alt="Baanx"/>
          </div>
          <h1 className="text-sm font-bold mt-18 sm:mt-16 mb-4 glitch">
            my skills :
          </h1>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 sm:gap-x-12 sm:gap-y-2 ">
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="grid grid-rows-2 text-xs">
                    <a>{skill.name}</a>
                    <div className="flex h-3 overflow-hidden rounded text-xs border-1">
                      <div className="bg-(--foreground2) text-(--background)" style={{ width: `${skill.value * 10}%` }}/>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <h1 className="text-sm font-bold mt-18 sm:mt-16 mb-4 glitch">
            highlight projects :
          </h1>
          <div className="grid grid-cols-3 gap-6 justify-items-center sm:max-w-1/2 sm:justify-items-start">
            {myProjects.map((projects, i) => (
              <div key={i}>
                <a target="_blank" rel="noopener noreferrer" href={projects.link}>
                  <img src={`./${projects.name}.png`} height="40" width="40" alt=""/>
                </a>
              </div>
            ))}
          </div>       
        </main>
      </div>
    );
  }