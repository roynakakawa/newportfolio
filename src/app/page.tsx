export default function Home() {
  return (
    <div className="h-[calc(100vh-6rem)] sm:h-[calc(100vh-2.5rem)] justify-items-center pb-content">
      <main className="grid w-full sm:grid-cols-2 sm:max-w-1/2 pt-42">
        <div className="text-center sm:text-left mb-12">
          <h1 className="mb-6 text-lg font-bold vhs">Hello there! happy day</h1>
          <p className="mb-6 text-md vhsm">I'm Roy Nakakawa</p>
          <p className="text-sm vhsm">I've been delivering projects for about 15 years</p>
          <p className="text-sm vhsm">and I have over 6 years in the Blockchain ecosystem</p>
        </div>
        <div className="justify-items-center">
          <img className="glitch saturate-70" src="./royito.png" height="140" width="140" alt="Roy"/>
        </div>
      </main>
    </div>
  );
}
