import Link from "next/link";
import React, { Fragment } from "react";
import PropTypes from "prop-types";

const getMenu = [
  {
    id: "dashboard",
    title: "Dashboard",
    path: "/dashboard",
    accessLevel: ['admin', 'professor', 'student']
  },
  {
    id: "my-library",
    title: "My Library",
    path: "/my-library",
    accessLevel: ['admin', 'professor', 'student']
  },
  {
    id: "profile",
    title: "Profile",
    path: "/profile",
    accessLevel: ['admin', 'professor', 'student']
  },
  {
    id: "settings",
    title: "Settings",
    path: "/settings",
    accessLevel: ['admin', 'professor', 'student']
  },
  {
    id: "manage-accounts",
    title: "Manage Accounts",
    path: "/manage-accounts",
    accessLevel: ['admin', 'professor', 'student']
  },
];

export const DashboardSidebar = (props: any) => {
  const { open } = props;
  return (
    <nav
      id="full-screen-example"
      className="fixed left-0 top-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] dark:bg-zinc-800 md:data-[te-sidenav-hidden='false']:translate-x-0"
      data-te-sidenav-init
      data-te-sidenav-mode-breakpoint-over="0"
      data-te-sidenav-mode-breakpoint-side="sm"
      data-te-sidenav-hidden="false"
      data-te-sidenav-color="dark"
      data-te-sidenav-content="#content"
      data-te-sidenav-scroll-container="#scrollContainer"
    >
      <div className="pt-6">
        <div id="header-content" className="pl-4">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp"
            alt="Avatar"
            className="mb-4 h-auto rounded-full align-middle"
            style={{ maxWidth: "50px" }}
          />

          <h4 className="mb-2 text-2xl font-medium leading-[1.2]">Ann Smith</h4>
          <p className="mb-4">ann_s@mdbootstrap.com</p>
        </div>
        <hr className="border-gray-300" />
      </div>
      <div id="scrollContainer">
        <ul
          className="relative m-0 list-none px-[0.2rem]"
          data-te-sidenav-menu-ref
        >
          {getMenu.map((menu) => (
            <li className="relative" key={menu.id}>
              <Link
                className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-gray-300/30 hover:text-inherit hover:outline-none focus:bg-gray-300/30 focus:text-inherit focus:outline-none active:bg-gray-300/30 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                href={menu.path}
                data-te-sidenav-link-ref
              >
                <span className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-700 dark:[&>svg]:fill-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    {/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
                </span>
                <span>{menu.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-0 h-24 w-full bg-inherit text-center">
        <hr className="mb-6 border-gray-300" />
        <p>tailwind-elements.com</p> {/* TO DO ADD A MENU BUTTON */}
      </div>
    </nav>
  );
};

DashboardSidebar.propTypes = {
  open: PropTypes.bool,
};
