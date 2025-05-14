import Link from "next/link";

const navItems = {
    '/': {
      name: 'Home',
    },
    '/about': {
      name: 'About',
    },
    '/contact': {
        name: 'Contact',
      },
  }

export function Navbar() {
    return (
        <nav className="absolute pt-12 w-full justify-items-center">
            <div className="relative w-full sm:max-w-1/2 justify-items-center sm:justify-items-start z-1">
                <div className="text-md sm:space-x-16 space-x-8 skewan">
                    {Object.entries(navItems).map(([path, { name }]) => {
                        return (
                            <Link key={path} href={path} className="flick">
                                {name}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </nav>
    );
}