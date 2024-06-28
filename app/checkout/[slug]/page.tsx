import { CheckCircle, Hourglass } from "lucide-react";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className=" w-full h-screen flex items-center justify-center">
      <div className=" w-[40%] rounded-xl shadow-2xl border p-10 flex flex-col items-center h-fit">
        <Hourglass
          size={150}
          className=" animate-pulse duration-400 transition-all ease-in text-yellow-500"
        />
        <br />
        <div>
          <h1>
            Your ordered is beign handled an email has been sent to your email
            address
          </h1>
        </div>
      </div>
    </div>
  );
}
