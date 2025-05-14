export function Footer() {
    return (
        <div className="grid pb-content h-10 content-center justify-items-center bg-(--background)">
            <div className="text-xs">
                <a>© {new Date().getFullYear()} Crafted with ♥ by Roy</a>
            </div>
        </div>
    );
}