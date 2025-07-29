import Link from "next/link";
export default function Topbar() {
  return (
        <header className="flex justify-between items-center bg-black-400 h-24 px-8">
            <div className="flex items-center">
                <Link href="https://playersonly.io/" className="hidden md:inline-flex">
                <img
                    src="https://media.licdn.com/dms/image/v2/C4E0BAQGfpxGLiuymGA/company-logo_200_200/company-logo_200_200/0/1630620500739/playersonly_logo?e=2147483647&v=beta&t=kxyFViupk8nMOs4wMd52si7s9ItBh_8OsZ1aZoW1ANY"
                    alt="PlayersOnly Logo"
                    className="w-14 h-14 rounded-full object-cover"
                    style={{ marginRight: 0, paddingRight: 0 }}
                />
                </Link>
                <span className="text-white font-extrabold tracking-normal hidden md:inline-block">
                PLAYERSONLY
                </span>
            </div>
            <nav className="gap-10 font-light hidden md:flex">
                <Link href="https://playersonly.io/">Features</Link>
                <Link href="https://playersonly.io/">Insights</Link>
                <Link href="https://playersonly.io/">Solutions</Link>
                <Link href="https://playersonly.io/">News</Link>
            </nav>
            <Link
                href="https://playersonly.io/"
                className="bg-white text-black px-7 py-2 rounded-2xl hover:bg-gray-200 transition-all duration-200 ease-in-out"
            >
                Book a Demo
            </Link>
        </header>
  );
}
