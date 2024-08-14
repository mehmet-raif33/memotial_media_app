import Image from "next/image";
import ScrollToTop from "../components/ScroolToTop";

export default function page() {
  return (
    <main className="">

        <div className="flex justify-center bg-slate-300">
          
          <div
          className="lg:w-[70%] md:w-[85%] sm:w-[100%] md:mt-16"
          >
            <ScrollToTop />
          </div>
        </div>
    </main>
  );
}
