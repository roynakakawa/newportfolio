export default function Availability() {
    return (
      <div className="justify-items-center pb-content h-[calc(100vh-6rem)] sm:h-[calc(100vh-2.5rem)]">
        <main className="grid w-full sm:max-w-1/2 text-center sm:text-justify pt-42 flex-grow">
          <h1 className="text-sm font-bold mb-4 text-center sm:text-left vhs">
            my current availability :
          </h1>
          <a className="text-sm vhsm">
            I'm currently available: 1 FTE / 40 hours per week         
          </a>    
        </main>
      </div>
    );
  }