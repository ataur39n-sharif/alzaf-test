import HomeSlider from "@/components/slider";

const x = [
  {
    name: "Women's & Girls' Fashion",
    slug: "womens_girls_fashion",
    childrens: [
      {
        name: "Children",
        slug: "childrens",
      },
    ],
  },
  {
    name: "Health & Beauty",
    slug: "health_beauty",
    childrens: [
      {
        name: "Children",
        slug: "childrens",
      },
    ],
  },
  {
    name: "Watches, Bags, Jewellery",
    slug: "watches_bags_jewellery",
    childrens: [
      {
        name: "Children",
        slug: "childrens",
      },
    ],
  },
  {
    name: "Men's & Boys' Fashion",
    slug: "mens_boys_fashion",
    childrens: [
      {
        name: "Children",
        slug: "childrens",
      },
    ],
  },
  {
    name: "Mother & Baby",
    slug: "mother_baby",
    childrens: [
      {
        name: "Children",
        slug: "childrens",
      },
    ],
  },
  {
    name: "Electronics Devices",
    slug: "electronics_devices",
    childrens: [
      {
        name: "Children",
        slug: "childrens",
      },
    ],
  },
  {
    name: "TV & Home Appliances",
    slug: "tv_home_appliances",
    childrens: [
      {
        name: "Children",
        slug: "childrens",
      },
    ],
  },
  {
    name: "Electronic Accessories",
    slug: "electronic_accessories",
    childrens: [
      {
        name: "Children",
        slug: "childrens",
      },
    ],
  },
  {
    name: "Groceries",
    slug: "groceries",
    childrens: [
      {
        name: "Children",
        slug: "childrens",
      },
    ],
  },
  {
    name: "Home & Lifestyle",
    slug: "home_lifestyle",
    childrens: [
      {
        name: "Children",
        slug: "childrens",
      },
    ],
  },
  {
    name: "Sports & Outdoors",
    slug: "sports_outdoors",
    childrens: [
      {
        name: "Children",
        slug: "childrens",
      },
    ],
  },
  {
    name: "Automobile",
    slug: "automobile",
    childrens: [
      {
        name: "Children",
        slug: "childrens",
      },
    ],
  },
  {
    name: "Computer and Laptop",
    slug: "computer_laptop",
    childrens: [
      {
        name: "Children",
        slug: "childrens",
      },
    ],
  },
  {
    name: "Pet Supplies",
    slug: "pet_supplies",
    childrens: [
      {
        name: "Children",
        slug: "childrens",
      },
    ],
  },
];

export const categories = [
  {
    name: "Women's & Girls' Fashion",
    slug: "womens_girls_fashion",
    childrens: x,
  },
  {
    name: "Health & Beauty",
    slug: "health_beauty",
    childrens: x,
  },
  {
    name: "Watches, Bags, Jewellery",
    slug: "watches_bags_jewellery",
    childrens: x,
  },
  {
    name: "Men's & Boys' Fashion",
    slug: "mens_boys_fashion",
    childrens: x,
  },
  {
    name: "Mother & Baby",
    slug: "mother_baby",
    childrens: x,
  },
  {
    name: "Electronics Devices",
    slug: "electronics_devices",
    childrens: x,
  },
  {
    name: "TV & Home Appliances",
    slug: "tv_home_appliances",
    childrens: x,
  },
  {
    name: "Electronic Accessories",
    slug: "electronic_accessories",
    childrens: x,
  },
  {
    name: "Groceries",
    slug: "groceries",
    childrens: x,
  },
  {
    name: "Home & Lifestyle",
    slug: "home_lifestyle",
    childrens: x,
  },
  {
    name: "Sports & Outdoors",
    slug: "sports_outdoors",
    childrens: x,
  },
  {
    name: "Automobile",
    slug: "automobile",
    childrens: x,
  },
  {
    name: "Computer and Laptop",
    slug: "computer_laptop",
    childrens: x,
  },
  {
    name: "Pet Supplies",
    slug: "pet_supplies",
    childrens: x,
  },
];

export default function Home() {
  return (
    <main>
      <div className="relative">
        <HomeSlider />
      </div>
    </main>
  );
}