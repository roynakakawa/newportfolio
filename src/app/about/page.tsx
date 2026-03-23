import { skills, myInfo } from "../data";

export default function About() {
    return (
      <div className="justify-items-center pb-content h-min-screen sm:h-[calc(100vh-2.5rem)]">
        <main className="grid sm:max-w-1/2 text-center sm:text-justify pt-42 flex-grow">
          <h1 className="text-sm font-bold mb-4 text-center sm:text-left vhs">
            a little bit about me :
          </h1>
          <a className="text-sm vhsm">{myInfo.about}</a>
          <h1 className="text-sm font-bold mt-18 sm:mt-16 mb-4 text-center sm:text-left vhs">
            teams where I have collaborated :
          </h1>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 justify-items-center sm:justify-items-start">
            <img className="glitch" src="./bitso.png" height="50" width="50" alt="Bitso"/>
            <img className="glitch" src="./cardano.png" height="50" width="50" alt="Cardano"/>
            <img className="glitch" src="./dxc.png" height="50" width="50" alt="DXC Technology"/>
            <img className="glitch" src="./iohk.png" height="50" width="50" alt="Input Output Global"/>
            <img className="glitch" src="./mina.png" height="50" width="50" alt="Mina"/>
            <img className="glitch" src="./mlabs.png" height="50" width="50" alt="Mlabs"/>
            <img className="glitch" src="./wanchain.png" height="40" width="40" alt="Wanchain"/>
            <img className="glitch" src="./baanx.png" height="40" width="40" alt="Baanx"/>
          </div>
          <h1 className="text-sm font-bold mt-18 sm:mt-16 mb-4 vhs">
            my skills :
          </h1>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 sm:gap-x-12 sm:gap-y-2 ">
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="grid grid-rows-2 text-xs">
                    <a className="vhsm">{skill.name}</a>
                    <div className="flex h-3 overflow-hidden rounded text-xs border-1 glitch">
                      <div className="bg-(--foreground2) text-(--background)" style={{ width: `${skill.value * 10}%` }}/>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <h1 className="text-sm font-bold mt-18 sm:mt-16 mb-4 vhs">
            highlight projects :
          </h1>
          <div className="grid grid-cols-3 gap-6 justify-items-center sm:max-w-1/2 sm:justify-items-start">
            <a target="_blank" rel="noopener noreferrer" href="https://mithril.network/doc/">
              <img className="glitch" src="./mithril.png" height="45" width="45" alt=""/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://hydra.family/head-protocol/">
              <img className="glitch" src="./hydra.png" height="50" width="50" alt=""/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://bridge.singularitynet.io/">
              <img className="glitch" src="./singularity.png" height="40" width="40" alt=""/>
            </a>
          </div>       
        </main>
      </div>
    );
  }