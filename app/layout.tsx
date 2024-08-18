import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "AI Headshot Generator Free - Create Professional Photos",
  description: "Create stunning, professional headshots for free with our AI Headshot Generator. Perfect for LinkedIn and resumes. Try it now!",
  keywords: 'AI headshot generator, professional photos, free headshots, quality headshot creation'
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-E64Y761D15"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E64Y761D15');
            `,
          }}
        />
        <section>
          <Suspense
            fallback={
              <div className="flex w-full px-4 lg:px-40 py-4 items-center border-b text-center gap-8 justify-between h-[69px]" />
            }
          >
            <Navbar />
          </Suspense>
        </section>
        <main className="flex flex-1 flex-col items-center py-16">
          {children}
        </main>
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
