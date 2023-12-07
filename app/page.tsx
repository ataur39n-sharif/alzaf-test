"use client"

import MegaMenu from "@/components/megaMenu";
import HomeSlider from "@/components/slider";
import Link from "next/link";
import { useState } from "react";

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


export default function Home() {
  const [secondNav, setSecondNav] = useState()
  const [thirdNav, setThirdNav] = useState()
  return (
    <main>
      <div className="relative">
        <div className="absolute top-0 left-0 w-[100vw] h-[380px] z-10">
          <div className=" h-[380px] container">
            <div className="w-[220px] bg-white h-full">
              {
                categories.map((category, i) => {
                  return (
                    <>
                      <Link href={''} key={i} className="text-sm gap-5 flex p-1 hover:text-orange-600" >{category.name}</Link>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
        <HomeSlider />
        <MegaMenu />
      </div>
    </main>
  );
}
