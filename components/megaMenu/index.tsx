"use client"

import * as React from "react"

// import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

const x = [
    {
        "name": "Women's & Girls' Fashion",
        "slug": "womens_girls_fashion"
    },
    {
        "name": "Health & Beauty",
        "slug": "health_beauty"
    },
    {
        "name": "Watches, Bags, Jewellery",
        "slug": "watches_bags_jewellery"
    },
    {
        "name": "Men's & Boys' Fashion",
        "slug": "mens_boys_fashion"
    },
    {
        "name": "Mother & Baby",
        "slug": "mother_baby"
    },
    {
        "name": "Electronics Devices",
        "slug": "electronics_devices"
    },
    {
        "name": "TV & Home Appliances",
        "slug": "tv_home_appliances"
    },
    {
        "name": "Electronic Accessories",
        "slug": "electronic_accessories"
    },
    {
        "name": "Groceries",
        "slug": "groceries"
    },
    {
        "name": "Home & Lifestyle",
        "slug": "home_lifestyle"
    },
    {
        "name": "Sports & Outdoors",
        "slug": "sports_outdoors"
    },
    {
        "name": "Automobile",
        "slug": "automobile"
    },
    {
        "name": "Computer and Laptop",
        "slug": "computer_laptop"
    },
    {
        "name": "Pet Supplies",
        "slug": "pet_supplies"
    }
]


const categories = [
    {
        "name": "Women's & Girls' Fashion",
        "slug": "womens_girls_fashion",
        "children": x
    },
    {
        "name": "Health & Beauty",
        "slug": "health_beauty",
        "children": x
    },
    {
        "name": "Watches, Bags, Jewellery",
        "slug": "watches_bags_jewellery",
        "children": x
    },
    {
        "name": "Men's & Boys' Fashion",
        "slug": "mens_boys_fashion",
        "children": x
    },
    {
        "name": "Mother & Baby",
        "slug": "mother_baby",
        "children": x
    },
    {
        "name": "Electronics Devices",
        "slug": "electronics_devices",
        "children": x
    },
    {
        "name": "TV & Home Appliances",
        "slug": "tv_home_appliances",
        "children": x
    },
    {
        "name": "Electronic Accessories",
        "slug": "electronic_accessories",
        "children": x
    },
    {
        "name": "Groceries",
        "slug": "groceries",
        "children": x
    },
    {
        "name": "Home & Lifestyle",
        "slug": "home_lifestyle",
        "children": x
    },
    {
        "name": "Sports & Outdoors",
        "slug": "sports_outdoors",
        "children": x
    },
    {
        "name": "Automobile",
        "slug": "automobile",
        "children": x
    },
    {
        "name": "Computer and Laptop",
        "slug": "computer_laptop",
        "children": x
    },
    {
        "name": "Pet Supplies",
        "slug": "pet_supplies",
        "children": x
    }
]

export default function MegaMenu() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {
                    categories.map((category) => {
                        return (
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>{category.name}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <MenuChildren category={category} />
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        )
                    })
                }
                {/* <NavigationMenuItem>
                    <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <p>content 1</p>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <p>content 2</p>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Documentation
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem> */}
            </NavigationMenuList>
        </NavigationMenu>
    )
}


const MenuChildren = ({ category }: any) => {
    return (
        <NavigationMenuList>
            {
                category.children.map((child: any) => {
                    return (
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>{child.name}</NavigationMenuTrigger>
                        </NavigationMenuItem>
                    )
                })
            }
        </NavigationMenuList>
    )
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
    )
})
ListItem.displayName = "ListItem"
