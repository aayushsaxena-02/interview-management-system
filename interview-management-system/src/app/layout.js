import "./../styles/globals.css";
import Navbar from "@/components/navbar/Navbar";

import { Kanit } from "next/font/google";

const inter = Kanit({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<div className="flex h-screen">
					<Navbar />
					<div className="flex-1 p-8 ">{children}</div>
				</div>
				{/* <Navbar />
				<main className="maincontent">{children}</main> */}
			</body>
		</html>
	);
}
