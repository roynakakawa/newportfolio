export default function Availability() {
    return (
      <div className="justify-items-center h-[calc(100vh-6rem)] sm:h-[calc(100vh-2.5rem)]">
        <main className="grid w-full sm:max-w-1/2 text-center sm:text-justify pt-42 flex-grow">
          <h1 className="text-sm font-bold mb-4 text-center sm:text-left glitch">
            my current availability :
          </h1>
          <a className="text-sm">
            I'm currently available: 1 FTE / 40 hours per week         
          </a>
          <h1 className="text-sm font-bold mb-4 mt-18 sm:mt-16 text-center sm:text-left glitch">
            collaboration options :
          </h1>
          <a className="text-sm mb-2">
            Consulting / Delivery Support: €100-€150/hour depending on scope.         
          </a> 
          <a className="text-sm">
            Fractional Program Leadership: Custom engagement depending on scope.       
          </a>       
        </main>
      </div>
    );
  }