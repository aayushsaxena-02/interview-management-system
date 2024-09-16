"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import "./../../styles/globals.css";

export default function Navbar() {
	const [activeLink, setActiveLink] = useState("/");

	const handleLinkClick = (link) => {
		setActiveLink(link);
	};

	const routes = [
		{ path: "/", label: "Home Page", icon: "" },
		{ path: "/user", label: "User", icon: "" },
	];

	return (
		<div className="flex flex-col h-screen p-6 bg-[#f5f6f6]">
			<div className="logo mb-6">
				<h3>Welcome to hiring management system</h3>
			</div>
			<nav className="flex flex-col space-y-4">
				{routes.map((route) => (
					<Link
						key={route.path}
						href={route.path}
						className={`my-4 py-3 px-6 ${
							activeLink === route.path
								? "bg-[#b5aed3] rounded-xl text-[#4f3a63] transition-all"
								: "border-transparent hover:transition-all"
						}`}
						onClick={() => handleLinkClick(route.path)}
					>
						{route.label}
					</Link>
				))}
			</nav>
		</div>
	);
}
