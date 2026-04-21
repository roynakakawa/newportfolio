import Link from "next/link";

const navItems = {
    '/': {
      name: 'Home',
    },
    '/about': {
      name: 'About',
    },
    '/availability': {
      name: 'Availability',
    },
    '/contact': {
        name: 'Contact',
      },
  }

export function Navbar() {
    return (
        <nav className="absolute pt-12 w-full justify-items-center">
            <div className="relative w-full sm:max-w-1/2 justify-items-center sm:justify-items-start">
                <div className="text-sm sm:space-x-16 space-x-8">
                    {Object.entries(navItems).map(([path, { name }]) => {
                        return (
                            <Link key={path} href={path} className="hover-glitch">
                                {name}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </nav>
    );
}