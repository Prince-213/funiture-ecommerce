import { CheckCheck } from "lucide-react";
import Image from "next/image";
import pic from "@/lib/assets/toa-heftiba-FV3GConVSss-unsplash.jpg";
import FeaturedSection from "../_ui/feautured_section";
import chair from "@/lib/assets/pngwing.com (1).png";
import table from "@/lib/assets/pngwing.com (3).png";
import sofa from "@/lib/assets/pngwing.com (7).png";
import Link from "next/link";

export default function Page() {
  return (
    <div className=" w-[80%] min-h-screen mx-auto  ">
      <h1 className=" my-14 text-4xl font-bold">Our Categories</h1>
      <div className=" flex items-center space-x-10">
        <Link href={"/categories/chairs"}>
          <div className=" flex justify-center items-center w-[14rem] h-[14rem]  bg-[#F2EDE7]">
            <Image src={chair} width={150} height={150} alt="" />
          </div>
          <br />
          <h1 className=" font-medium text-center">Chairs</h1>
        </Link>

        <Link href={"/categories/tables"}>
          <div className=" flex justify-center items-center w-[14rem] h-[14rem]  bg-[#F2EDE7]">
            <Image src={table} width={150} height={150} alt="" />
          </div>
          <br />
          <h1 className=" font-medium text-center">Tables</h1>
        </Link>

        <Link href={"/categories/sofas"}>
          <div className=" flex justify-center items-center w-[14rem] h-[14rem]  bg-[#F2EDE7]">
            <Image src={sofa} width={150} height={150} alt="" />
          </div>
          <br />
          <h1 className=" font-medium text-center">Sofas</h1>
        </Link>
      </div>
    </div>
  );
}
