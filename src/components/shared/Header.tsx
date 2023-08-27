import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <header>
      <div className="max-w-screen-xl mx-auto">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost normal-case text-xl">
              NZXT
            </Link>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end mr-4">
              <button>
                <Link href="/pc-builder" className="uppercase">
                  PC Builder
                </Link>
              </button>
            </div>
            <div className="dropdown dropdown-end mr-4 uppercase">
              <label tabIndex={0}>
                <h4>categories</h4>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
            {session ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <div className="justify-between">
                      <Image
                        src={session?.user?.image || ""}
                        height={50}
                        width={50}
                        alt="profile picture"
                      />
                    </div>
                  </li>
                  <li>
                    <a>{session?.user?.name}</a>
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
                      callbackUrl:
                        "https://pc-builder-website-kappa.vercel.app/",
                    })
                  }
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
