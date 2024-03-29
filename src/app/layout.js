import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Generated by create Stuepp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-no-repeat bg-slate-900 bg-cover min-w-screen min-h-screen m-0 p-0 '>
        <div className="flex w-full">
          <div className="relative flex w-full flex-col">
              <NavBar />
              <main className="flex-auto">
                {children}
              </main>
              <footer>
              </footer>
          </div>
        </div>
      </body>
    </html>
  );
}

//{inter.className}