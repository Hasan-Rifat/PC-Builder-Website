import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import { BiSolidDownArrow } from "react-icons/bi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { useState } from "react";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const { data: session } = useSession();
  const [mobileMenu, setMobileMenu] = useState(false);

  const data = [
    {
      id: 1,
      text: "Processor",
    },
    {
      id: 2,
      text: "Motherboard",
    },
    {
      id: 3,
      text: "RAM",
    },
    {
      id: 4,
      text: "Power Supply Unit",
    },
    {
      id: 5,
      text: "Storage Device",
    },
    {
      id: 6,
      text: "Monitor",
    },
    {
      id: 7,
      text: "Others",
    },
  ];
  return (
    <header>
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost normal-case text-xl">
              NZXT
            </Link>
          </div>
          {/*  tab menu */}
          <div className="flex-none md:block hidden">
            <div className="dropdown dropdown-end mr-4">
              <button className="btn bg-white text-black hover:bg-white hover:text-black">
                <Link href="/pc-builder" className="uppercase">
                  PC Builder
                </Link>
              </button>
            </div>
            <div className="dropdown dropdown-end mr-4 uppercase">
              <label tabIndex={0} className="flex items-center gap-2">
                <h4>categories</h4>{" "}
                <span>
                  <BiSolidDownArrow />
                </span>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {data.map((item) => (
                  <li key={item.id}>
                    <Link href={`/categories/${item.text}`}>
                      <span>{item.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {session ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <Image
                      src={session?.user?.image || ""}
                      height={50}
                      width={50}
                      alt="profile picture"
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Name: {session?.user?.name}</a>
                  </li>
                  <li>
                    <button onClick={() => signOut()}>Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="dropdown dropdown-end">
                <button
                  className="uppercase"
                  onClick={() =>
                    signIn("github", {
                      callbackUrl: `${process.env.NEXT_PUBLIC_HOST}`,
                    })
                  }
                >
                  Login
                </button>
              </div>
            )}
          </div>
          {/* mobile menu */}
          <div className="block md:hidden">
            <label
              tabIndex={0}
              className="text-white"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <AiOutlineMenuFold size={30} />
            </label>
            <div className="relative">
              {mobileMenu && (
                <div className="absolute bg-indigo-800 rounded-lg p-5 -left-[137px] top-[17px]">
                  <div className="flex flex-col gap-10 ">
                    <div className="dropdown dropdown-end mr-4">
                      <button className="btn bg-white text-black hover:bg-white hover:text-black">
                        <Link href="/pc-builder" className="uppercase">
                          PC Builder
                        </Link>
                      </button>
                    </div>
                    <div className="dropdown dropdown-end mr-4 uppercase">
                      <label tabIndex={0} className="flex items-center gap-2">
                        <h4>categories</h4>{" "}
                        <span>
                          <BiSolidDownArrow />
                        </span>
                      </label>
                      <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        {data.map((item) => (
                          <li key={item.id}>
                            <Link href={`/categories/${item.text}`}>
                              <span>{item.text}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {session ? (
                      <div className="dropdown dropdown-end">
                        <label
                          tabIndex={0}
                          className="btn btn-ghost btn-circle avatar"
                        >
                          <div className="w-10 rounded-full">
                            <Image
                              src={session?.user?.image || ""}
                              height={50}
                              width={50}
                              alt="profile picture"
                            />
                          </div>
                        </label>
                        <ul
                          tabIndex={0}
                          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                          <li>
                            <a>Name: {session?.user?.name}</a>
                          </li>
                          <li>
                            <button onClick={() => signOut()}>Logout</button>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <div className="dropdown dropdown-end">
                        <button
                          className="uppercase"
                          onClick={() =>
                            signIn("github", {
                              callbackUrl: `${process.env.NEXT_PUBLIC_HOST}`,
                            })
                          }
                        >
                          Login
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
