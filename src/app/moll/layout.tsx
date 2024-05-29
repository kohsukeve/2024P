"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "GOODS",
    href: "/moll/goods",
    description: "新商品入荷情報をいますぐチェック",
  },
  {
    title: "SPECIAL",
    href: "/moll/special",
    description: "バースデープランやワークショップの情報をお届けします",
  },
];

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <div className="relative flex flex-wrap bg-black px-2 py-0.5 sm:flex-nowrap  sm:justify-between sm:gap-3 sm:px-4 md:px-8">
          {/* <div className="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-[8px] text-white sm:order-none sm:mb-0 sm:w-auto md:text-base"> */}
          <div className="max-w-screen-sm  text-white text-[8px]">
            @2024 Mouse World LLC
          </div>
          <div className="flex m-0 py-0">
            <a
              href="https://twitter.com/OnsokunoMikuni"
              className="inline-flex items-center"
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                style={{
                  width: "10px",
                  height: "10px",
                  color: "white",
                }}
              />
            </a>
            <a
              href="https://twitter.com/OnsokunoMikuni"
              className="inline-flex items-center"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                style={{
                  width: "10px",
                  height: "10px",
                  color: "white",
                }}
              />
            </a>
          </div>
        </div>
      </div>

      {/*  */}
      {/* ヘッダー */}
      <div className="flex justify-center ">
        {/* firstPageIcon */}
        <div className="firstPageIcon">
          <Image
            src="/moll/Mouse1.png"
            width={120}
            height={70}
            alt="Picture of Character"
          />
        </div>
        <div>
          <a href="/moll">
            <h1 className="text-5xl mt-6">MOUSE CAFE</h1>
          </a>
          <p className="hidden lg:inline-block ml-16 text-gray-400">
            It is NOT EATING. JUST DINNING
          </p>
        </div>
        <div className="m-8">
          {/* ナビゲーションメニュー */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>SHOPLIST</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {/* <ListItem href="/moll/shop" title="YOKOHAMA"></ListItem> */}
                    <ListItem
                      href="/moll/shop/YOKOHAMA"
                      title="YOKOHAMA"
                    ></ListItem>
                    <ListItem href="/moll/shop/KOBE" title="KOBE"></ListItem>
                    <ListItem
                      href="/moll/shop/SAPPORO"
                      title="SAPPORO"
                    ></ListItem>
                    <ListItem
                      href="/moll/shop/AKIHABARA"
                      title="AKIHABARA"
                    ></ListItem>
                    <ListItem
                      href="/moll/shop/OKINAWA"
                      title="OKINAWA"
                    ></ListItem>
                    <ListItem
                      href="/moll/shop/NEWYORK"
                      title="NEWYORK"
                    ></ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>ITEMS</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex justify-center">
                    <Image
                      src="/moll/image.png"
                      width={400}
                      height={100}
                      alt="Picture of Character"
                    />
                  </div>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    ONLINE SHOP
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="firstPageIcon">
          <Image
            src="/moll/Mouse2.png"
            width={120}
            height={70}
            alt="Picture of Character"
          />
        </div>
      </div>

      {/* 子ページ依存 */}
      <div className="ml-[25%] w-[50%] mt-10">
        <motion.div
          className="site-wrapper"
          variants={variants}
          initial="hidden"
          animate="enter"
          transition={{
            type: "linear",
            duration: 2,
          }}
        >
          {children}
        </motion.div>
      </div>

      {/* フッター */}

      <div className="grid grid-cols-2 mt-40 h-96 bg-foo">
        <div className="h-20 m-20 text-8xl text-gray-500">MOUSE COMPANY</div>
        <div className="grid grid-cols-2 m-10">
          <div className="hidden lg:inline-block">
            <div className="text-4xl text-gray-500">YOKOHAMA</div>
            <div className="text-4xl text-gray-500">KOBE</div>
            <div className="text-4xl text-gray-500">SAPPORO</div>
            <div className="text-4xl text-gray-500">AKIHABARA</div>
            <div className="text-4xl text-gray-500">OKINAWA</div>
            <div className="text-4xl text-gray-500">NEWYORK</div>
          </div>
          <div className="hidden lg:inline-block">
            <div className="mt-20 text-4xl text-gray-500">SHOP</div>
            <div className="text-4xl text-gray-500">ITEM</div>
            <div className="text-4xl text-gray-500">SPECIAL</div>
            <div className="text-4xl text-gray-500">PRIVACY POLICY</div>
          </div>
        </div>
      </div>

      <div>
        <div className="relative flex flex-wrap bg-foo px-2 py-0.5 sm:flex-nowrap  sm:justify-center sm:gap-3 sm:px-4 md:px-8">
          {/* <div className="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-[8px] text-white sm:order-none sm:mb-0 sm:w-auto md:text-base"> */}
          <div className="max-w-screen-sm text-sm">@2024 Mouse World LLC</div>
        </div>
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
