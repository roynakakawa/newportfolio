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
        <nav className="grid items-center h-22 sm:h-32 mb-14 pb-content justify-items-center">
            <div className="w-full sm:max-w-1/2 justify-items-center sm:justify-items-start">
                <div className="text-md sm:space-x-16 space-x-8">
                    {Object.entries(navItems).map(([path, { name }]) => {
                        return (
                            <Link key={path} href={path} className="hover:text-gray-500">
                                {name}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </nav>
    );
}