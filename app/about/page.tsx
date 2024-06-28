import { CheckCheck } from "lucide-react";
import Image from "next/image";
import pic3 from "@/lib/assets/krakenimages-Y5bvRlcCx8k-unsplash.jpg";
import pic1 from "@/lib/assets/jason-goodman-Oalh2MojUuk-unsplash.jpg";
import pic2 from "@/lib/assets/austin-distel-wawEfYdpkag-unsplash.jpg";

export default function Page() {
  return (
    <div className=" w-[80%] min-h-screen mx-auto  ">
      <h1 className=" my-14 text-4xl font-bold">Our Story</h1>
      <div className=" grid grid-cols-3 gap-10">
        <div className=" w-full h-[65vh] flex flex-col ">
          <div className=" h-[20%]">
            <h1 className=" text-lg">
              At Dublin-Funitures, we believe that your home should be a
              reflection of your personal style and a sanctuary of comfort and
              functionality.
            </h1>
          </div>

          <div className=" w-full h-[80%]  relative">
            <Image
              src={pic3}
              fill
              alt=""
              className=" object-cover object-center"
            />
          </div>
        </div>

        <div className=" w-full h-[65vh] flex  flex-col-reverse justify-between  ">
          <div className=" h-[20%] flex flex-col justify-between ">
            <div className=" flex items-center space-x-4">
              <CheckCheck />
              <p>Easy returns and post-purchase support.</p>
            </div>
            <div className=" flex items-center space-x-4">
              <CheckCheck />
              <p>Encouragement to explore collections and trends.</p>
            </div>
            <div className=" flex items-center space-x-4">
              <CheckCheck />
              <p>Emphasis on quality and craftsmanship.</p>
            </div>
          </div>
          <br />

          <div className=" w-full h-[80%] relative">
            <Image
              src={pic1}
              fill
              alt=""
              className=" object-cover object-center"
            />
          </div>
        </div>

        <div className=" w-full h-[65vh] flex flex-col relative">
          <Image
            src={pic2}
            fill
            alt=""
            className=" object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
