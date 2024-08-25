'use client'
import ScrollToTop from "../components/ScroolToTop";
import { redirect } from "next/navigation";

export default function Page() {
  redirect('/homepage')
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
