'use client'

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  SearchIcon,
  Logo,
  ClearIcon,
} from "@/components/icons";

export const Navbar = () => {


  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            {/* <NavbarMenuToggle /> */}
            <Logo />  
            <p className="font-bold text-inherit">Отчеты</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-between ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium hover:bg-slate-200 dark:hover:bg-slate-600 ",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}

        <NavbarItem className="hidden sm:flex ">
        {/* className='sm:hidden basis-1 pl-4 justify="end' isIconOnly aria-label="Take a photo" color="warning" variant="faded" */}
          <Button 
            className='size="sm" isIconOnly variant="faded"  '  
            onPress={() => {window.localStorage.clear(); window.location.reload();} }
          >
            
            <ClearIcon  />
          </Button>
        </NavbarItem>

        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>

      </NavbarContent>

      {/* <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
      </NavbarContent>
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Button className='sm:hidden basis-1 pl-4 justify="end' asd/>
      </NavbarContent> */}

      <NavbarMenu>
        {/* {searchInput} */}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};


{/* <Link isExternal aria-label="Github" href={siteConfig.links.github}>
<GithubIcon className="text-default-500" />
</Link> */}
