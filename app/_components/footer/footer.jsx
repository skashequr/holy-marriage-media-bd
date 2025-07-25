function Footer() {
    return (
        <footer className="w-full py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Grid */}
                <div>
                    <a href="https://pagedone.io/" className="flex justify-center">
                        {/* ...SVG code... */}
                    </a>
                    <ul className="text-lg flex items-center justify-center flex-col md:flex-row py-16 gap-6 md:gap-12 transition-all duration-500">
                        {/* ...list items... */}
                    </ul>
                </div>
                {/* Grid */}
                <div className="py-7 border-t border-gray-200">
                    <div className="flex items-center flex-col-reverse justify-between md:flex-row">
                        <span className="text-sm text-gray-500 mt-7 md:mt-0">
                            ©
                            <a href="https://pagedone.io/">pagedone</a> 2024, All rights reserved.
                        </span>
                        <div className="flex items-center flex-col gap-4 md:flex-row">
                            <input
                                type="text"
                                name="email"
                                className="py-3 px-6 h-12 border border-gray-300 rounded-md"
                                placeholder="Your email"
                            />
                            {/* Add any other elements here */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;