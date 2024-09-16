import '../../src/styles/globals.css'
import Navbar from "@/components/navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="maincontent">
        {children}
        </main>
      </body>
    </html>
  );
}
