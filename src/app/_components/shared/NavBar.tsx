'use client'

import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle } from "@nextui-org/react";
import SomaLogo from "../image/soma.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const NavBar = () => {
    const {data: session} = useSession();
    const [activeItem, setActiveItem] = useState<string>("Portfolio");

    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleItemClick = (item: string) => {
        setActiveItem(item);
    };

    useEffect(() => {
        if(activeItem === "Portfolio") {
            router.push("/");
        } else if(activeItem === "About us") {
            router.push("/");
        } else if(activeItem === "Team") {
            router.push("/");
        } else if(activeItem === "Sign In") {
            router.push("/");
        } else if(activeItem === "Fellowship") {
            router.push("https://somafellows.com/");
        } else if(activeItem === "Dashboard") {
            router.push("/");
        }
    }, [activeItem]);
    
    const menuItems = [
        "Portfolio",
        "About us",
        "Team",
        "News",
        "Jobs",
        "Fellowship",
        session ? "Dashboard" : "Sign In"
    ];
    
    return (
        <Navbar 
            className="border border-b-1 border-gray-200 py-2"
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent>
                <NavbarMenuToggle className="sm:hidden" />
                <NavbarBrand>
                    <Image src={SomaLogo} alt="Logo" width={50} height={18} />
                </NavbarBrand>
            </NavbarContent>

            {/* Desktop Menu */}
            <NavbarContent className="hidden sm:flex gap-8" justify="end">
                {menuItems.map((item) => (
                    <NavbarItem 
                        key={item}
                        className={activeItem === item ? "border-b-2 border-purple-600" : ""}
                    >
                        <Link 
                            color="foreground"
                            onPress={() => handleItemClick(item)}
                            className="cursor-pointer font-medium text-[14px]"
                        >
                            {item}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            {/* Mobile Menu */}
            <NavbarMenu className="bg-white">
                {menuItems.map((item) => (
                    <NavbarItem key={item}>
                        <Link
                            color="foreground"
                            className={`w-full ${activeItem === item ? "text-purple-600" : ""}`}
                            onPress={() => handleItemClick(item)}
                        >
                            {item}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};

export default NavBar;
