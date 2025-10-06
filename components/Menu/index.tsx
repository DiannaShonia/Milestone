import React, { use } from "react";
import clsx from "clsx";
import { useMenuStore } from "@/store/useMenuStore";
import { useRouter } from "next/router";

import styles from "./styles.module.css";

const MenuItems = [
  {
    id: "1",
    label: "ᲞᲠᲝᲔᲥᲢᲘᲡ ᲨᲔᲡᲐᲮᲔᲑ",
  },
  {
    id: "2",
    label: "ᲚᲝᲙᲐᲪᲘᲐ",
  },
  {
    id: "3",
    label: "ᲒᲐᲠᲔᲛᲝ",
  },
  {
    id: "4",
    label: "ᲡᲘᲐᲮᲚᲔᲔᲑᲘ",
  },
  {
    id: "5",
    label: "ᲙᲝᲜᲢᲐᲥᲢᲘ",
  },
];

const Menu = () => {
  const { activeMenuItem, setActiveMenuItem } = useMenuStore();
  const router = useRouter();

  const handleMenuNavigation = (index: number) => {
    setActiveMenuItem(index.toString());
    router.pathname === "/about-project/[slug]" ? router.back() : null;
  };

  console.log(router.pathname, "--pathname");

  return (
    <div
      className={clsx(
        styles.menu,
        activeMenuItem === "1" ? styles.locationHeight : "",
        router.pathname === "/about-project/[slug]" ? styles.slug : ""
      )}
    >
      {MenuItems.map((menuItem, index) => (
        <h2
          key={menuItem.id}
          onClick={() => handleMenuNavigation(index)}
          className={clsx(
            styles.item,
            activeMenuItem === index.toString() ? styles.active : ""
          )}
        >
          {menuItem.label}
        </h2>
      ))}
    </div>
  );
};

export default Menu;
