import { CheckCircle, Hourglass } from "lucide-react";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className=" w-full h-screen flex items-center justify-center">
      <div className=" w-[80%] lg:w-[40%] rounded-xl shadow-2xl border p-10 flex flex-col items-center h-fit">
        <Hourglass
          size={80}
          className=" animate-pulse duration-400 transition-all ease-in text-yellow-500"
        />
        <br />
        <div>
          <h1>
            “Thanks for shopping with us Our estimated customer care will
            contact you shortly regarding your order”
          </h1>
          <Link href={"/"} className="mt-6">
            <p className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
              Back to Home
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
