import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const Navbar = async() => {
	const {getUser } = getKindeServerSession();
    const user = await getUser();
  return (
    <div className="bg-purple-600">
      <div className="navbar w-10/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 text-white w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/" className="text-purple-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-purple-500">
                  Profile
                </Link>
              </li>
			{
				user?.email?<><button className="cursor-pointer mt-1 py-2 rounded-2xl bg-purple-500 text-sm text-white">LogOut</button></>:<> <button className="cursor-pointer mt-1 py-2 rounded-2xl bg-purple-500 text-sm text-white">
                <LoginLink postLoginRedirectURL="/">Sign in</LoginLink>
              </button>
              <button className="cursor-pointer mt-1 py-2 rounded-2xl bg-purple-500 text-sm text-white">
                <RegisterLink postLoginRedirectURL="/">Sign up</RegisterLink>
              </button></>
			}
            </ul>
          </div>
          <p className="text-3xl font-bold text-white">TourLover</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/profile" className="text-white">
                Profile
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex">
			{
				user?.email?<><LogoutLink><button className="btn text-purple-500 ml-4">logOut</button></LogoutLink></>:<><button className="btn text-purple-500 ml-4">
				<LoginLink postLoginRedirectURL="/">Sign in</LoginLink>
			  </button>
			  
			  <button className="btn text-purple-500 ml-4">
				<RegisterLink postLoginRedirectURL="/">Sign up</RegisterLink>
			  </button></>
			}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
