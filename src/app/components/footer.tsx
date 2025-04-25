export function Footer() {
    return (
        <div className="absolute bottom-12 sm:bottom-0 inset-x-0 h-12 justify-items-center">
            <div className="flex  text-xs">
                <a>© {new Date().getFullYear()} Crafted with ♥ nextjs + tailwind + Roy</a>
            </div>
        </div>
    );
}