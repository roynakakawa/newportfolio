export default function About() {
    return (
      <div className="justify-items-center pb-content sm:mt-18">
        <main className="grid sm:max-w-1/2 text-justify px-2 sm:px-0">
          <a className="text-sm vhsm">I'm a mexican electric engineer living in Madrid, Spain.</a>
          <a className="text-sm vhsm">
            I usually spend my time reading and having fun automating boring things. I've been involved in the Crypto ecosystem for about 6 years.
            I really believe that Blockchain can change our current understanding of how money works and empower individuals over centralized authorities.          
          </a>
          <h1 className="text-sm font-bold mt-12 mb-12 vhs">
            teams where I have collaborated:
          </h1>
          <div className="grid grid-cols-3 sm:max-w-1/2 gap-6">
            <img className="glitch" src="./bitso.png" height="50" width="50" alt=""/>
            <img className="glitch" src="./cardano.png" height="50" width="50" alt=""/>
            <img className="glitch" src="./iohk.png" height="50" width="50" alt=""/>
            <img className="glitch" src="./mina.png" height="50" width="50" alt=""/>
            <img className="glitch" src="./mlabs.png" height="50" width="50" alt=""/>
            <img className="glitch" src="./wanchain.png" height="40" width="40" alt=""/>
          </div>
          <h1 className="text-sm font-bold mt-12 mb-6 vhs">

          </h1>
          <div className="grid grid-cols-3 sm:max-w-1/2">
          </div>
        </main>
      </div>
    );
  }