import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export function HeaderSection() {
  return (
    <div className=" fixed top-0 w-full z-30 clearNav md:bg-opacity-90 transition duration-300 ease-in-out">
      <div className="flex flex-col max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className=" flex-grow  flex flex-row items-center justify-between p-4">
          <div className=" flex items-center justify-center text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline">
            <div className="max-w-20 flex flex-col items-center justify-center w-full h-20 ">
              <span className="text-3xl Avenir tracking-tighter text-gray-900 md:text-4xl lg:text-3xl">
                SPRTA
              </span>

              <span className="flex font-light text-[12px] lg:text-[11px]  -mt-[10px]">
                INDIE•STUDIO
              </span>
            </div>
          </div>
          <Link
            href="https://alvarenga.hashnode.dev/"
            target="_blank"
            aria-label="button"
          >
            <Button>
              Blog
              <MoveRight size={18} className="ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
