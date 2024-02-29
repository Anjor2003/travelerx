import { useState, useEffect } from "react";
import { CgMenuGridO, CgClose } from "react-icons/cg";
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaSquareSnapchat,
} from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import Button from "../ui/Button";
import Route from "../ui/Route";
import { navLinks } from "@/constants";
import Link from "next/link";
import useMenuActive from "@/hooks/useMenuActive";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";  

interface MobileMenuProps {
  user: User;
}

const MobileMenu:React.FC<MobileMenuProps> = ({ user }) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const router = useRouter()
  const mobileMenuHandler = () => {
    setOpenMobileMenu(!openMobileMenu);
  };
  return (
    <>
      <div className="md:hidden" onClick={mobileMenuHandler}>
        {openMobileMenu ? <CgClose size={25} /> : <CgMenuGridO size={25} />}
      </div>
      {openMobileMenu ? (
        <div
          onClick={() => setOpenMobileMenu(false)}
          className="fixed w-full h-screen top-0 left-0 bg-black/25 z-50"
        >
          <div
            className="absolute h-screen left-0 top-0 w-60 bg-white z-[999] px-5 border-r overflow-y-hidden flex flex-col gap-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-b py-5 text-center">
              <Link href={"/"}>
                <h1 className="text-3xl font-extrabold text-secondary">
                  Traveler<span className="text-primary">X</span>
                </h1>
              </Link>

              <div className="flex gap-5 text-secondary flex-1 justify-center text-xl mt-5">
                <FaFacebookSquare />
                <FaSquareInstagram />
                <FaSquareXTwitter />
                <FaSquareSnapchat />
              </div>
            </div>

            <ul className="flex items-center justify-center gap-5 flex-col mt-5 py-10 border-b">
              {navLinks.map((link, index) => {
                const isActive = useMenuActive(link.route);
                return (
                  <li key={index}>
                    <Route
                      route={link.route}
                      label={link.label}
                      isActive={isActive}
                      onClick={() => setOpenMobileMenu(false)}
                    />
                  </li>
                );
              })}
            </ul>

            {!user && (
              <div className="flex gap-5 flex-1 flex-col py-5">
                <Button
                  text="Log In"
                  onClick={() => router.push('/access')}
                  aria="log in button"
                />
                <Button
                  text="Sign Up"
                  onClick={() => null}
                  aria="Sign up button"
                />
              </div>
            )}
            {user && (
              <div>
                <ul className="flex flex-col gap-5 items-center">
                  <Link href="/create" onClick={() => setOpenMobileMenu(false)}>
                    <li className="cursor-pointer hover:text-orange-500">
                      Ctreate a Post
                    </li>
                  </Link>
                  <Link
                    href="/userposts"
                    onClick={() => setOpenMobileMenu(false)}
                  >
                    <li className="cursor-pointer hover:text-orange-500">
                      My Post
                    </li>
                  </Link>
                  <li
                    className="cursor-pointer hover:text-orange-500 "
                    onClick={() => signOut()}
                  >
                    Sign Out
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MobileMenu;
