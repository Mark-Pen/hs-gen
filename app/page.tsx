import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

import hero from "/public/hero.png";

import { Button } from "@/components/ui/button";
import ExplainerSection from "@/components/ExplainerSection";
import PricingSection from "@/components/PricingSection";
import FrequentlyQuestion from "@/components/FrequentlyQuestion";
import FunctionDescription from "@/components/FunctionDescription";
import Recommend from "@/components/Recommend";

export const dynamic = "force-dynamic";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/overview");
  }

  return (
    <div className="flex flex-col items-center pt-16">
      <div className="flex flex-col lg:flex-row items-center gap-8 p-8 max-w-6xl w-full">
        <div className="flex flex-col space-y-4 lg:w-1/2 w-full">
          <h1 className="text-5xl font-bold">
            AI Headshot Generator Free
          </h1>
          <h2 className="text-gray-600 text-lg">
            Experience the future of photography with our AI Headshot Generator. Get a professional, high-quality headshot for free on your first try. Perfect for LinkedIn, resumes, or any professional profile.
          </h2>
          <div className="flex flex-col space-y-2">
            <Link href="/login">
              <Button className="w-full lg:w-1/2">Get Your Headshots</Button>
            </Link>
            <p className="text-sm text-gray-500 italic">
              Trusted by professionals worldwide. Quick and efficient.
            </p>
          </div>
          <div className="mt-4 text-gray-500">
            <span>Already a member? </span>
            <Link className="text-blue-600 hover:underline" href="/login">
              Sign In
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
          <img
            src={hero.src}
            alt="ai headshot generator free"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
      <ExplainerSection />
      <PricingSection />
      <FunctionDescription />
      <Recommend />
      <FrequentlyQuestion />
    </div>
  );
}
