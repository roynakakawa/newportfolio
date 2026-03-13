export default function Home() {
  return (
    <div className="h-[calc(100vh-6rem)] sm:h-[calc(100vh-2.5rem)] justify-items-center pb-content">
      <main className="grid w-full sm:grid-cols-2 sm:max-w-1/2 pt-42">
        <div className="text-center sm:text-left mb-12">
          <h1 className="mb-6 text-lg font-bold vhs">Hello there! happy day</h1>
          <p className="mb-6 text-sm vhsm">This is <span className="underline decoration-dashed">Roy Nakakawa</span></p>
          <p className="text-sm vhsm mb-12">I'm a Delivery and GTM leader with 15+ years of experience, and I have over 7 years in the web3 ecosystem</p>
          <a href='/contact' className="text-sm flick">Want to chat?</a>
        </div>
        <div className="justify-items-center">
          <img className="glitch saturate-70" src="./royito.png" height="140" width="140" alt="Roy"/>
        </div>
      </main>
    </div>
  );
}
