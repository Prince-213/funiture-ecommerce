import MainUi from "./_ui/main_ui";
import chair from "@/lib/assets/pngwing.com (1).png";
import table from "@/lib/assets/pngwing.com (3).png";
import sofa from "@/lib/assets/pngwing.com (7).png";
import Image from "next/image";
import FeaturedSection from "./_ui/feautured_section";
import Browse from "./_ui/browse";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" w-full min-h-screen ">
      <MainUi />
      <div className=" py-36 flex lg:flex-row flex-col items-center lg:justify-center space-x-10">
        <Link href={"/categories/chairs"}>
          <div className=" flex justify-center items-center w-[14rem] h-[14rem] rounded-[50%] bg-[#F2EDE7]">
            <Image src={chair} width={150} height={150} alt="" />
          </div>
          <br />
          <h1 className=" font-medium text-center">Chairs</h1>
        </Link>

        <Link href={"/categories/tables"}>
          <div className=" flex justify-center items-center w-[14rem] h-[14rem] rounded-[50%] bg-[#F2EDE7]">
            <Image src={table} width={150} height={150} alt="" />
          </div>
          <br />
          <h1 className=" font-medium text-center">Tables</h1>
        </Link>

        <Link href={"/categories/sofas"}>
          <div className=" flex justify-center items-center w-[14rem] h-[14rem] rounded-[50%] bg-[#F2EDE7]">
            <Image src={sofa} width={150} height={150} alt="" />
          </div>
          <br />
          <h1 className=" font-medium text-center">Sofas</h1>
        </Link>
      </div>
      <FeaturedSection />
      <Browse />
    </main>
  );
}
