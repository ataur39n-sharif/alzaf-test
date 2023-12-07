import Image from "next/image";
import Link from "next/link";
import CartGroup from "../assets/cart";
import ChevronDown from "../assets/chevron-down";
import CloudServiceGroup from "../assets/cloud-service";
import HeartGroup from "../assets/heart";
import SearchIconGroup from "../assets/search";
import UserGroup from "../assets/user";


export default function Navbar() {
    return (
        <>
            <div className="bg-[#F0F1F1] py-[5px]">
                <div className="container flex justify-between  ">
                    <div className="flex gap-5">
                        <Link href={''} className="flex justify-center items-center">language <ChevronDown className="stroke-[1.3px] mt-[3px] w-4" /> </Link>
                        <Link href={''}>Help center</Link>
                        <Link href={''}>Helpline: 1234567890</Link>
                    </div>
                    <div className="flex gap-5">
                        <Link href={''}>Become a seller</Link>
                        <Link href={''}>Order Track</Link>
                        <Link href={''} className="gap-5 text-[#F97316]">
                            <Link href={'/signup'}>Sign up</Link>
                            <span>{"/"}</span>
                            <Link href={'/login'}>Login</Link>
                        </Link>
                    </div>
                </div>
            </div>

            <nav className="container flex justify-between items-center gap-5">
                <Image
                    src="/alzaf-logo.svg"
                    width={500}
                    height={500}
                    alt="logo of the site"
                    className="w-[129px] h-[38px]"
                />
                <div className="relative max-w-[704px]  w-full">
                    <input type="text" className="max-w-[704px] w-full h-[44px] bg-[#EFF0F5] rounded-[10px] focus:outline-none px-3" />
                    <div className="absolute top-0 right-0 rounded-[10px] overflow-hidden">
                        <SearchIconGroup />
                    </div>
                </div>

                <div className="flex justify-between items-center gap-5 py-[10px]">
                    <div className="flex justify-between items-center gap-5">
                        <div className="p-[10px] bg-[#fbf3ef] rounded-[10px]">
                            <UserGroup />
                        </div>
                        <div className="p-[10px] bg-[#fbf3ef] rounded-[10px]">
                            <HeartGroup />
                        </div>
                        <div className="p-[10px] bg-[#fbf3ef] rounded-[10px]">
                            <CartGroup />
                        </div>
                    </div>
                    <CloudServiceGroup />
                </div>
            </nav>
        </>
    )
}