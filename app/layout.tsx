import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "AI Headshot Generator Free - Create Professional Photos Instantly",
  description: "Experience the future of professional photography with our AI Headshot Generator Free tool. Create stunning, high-quality headshots instantly and effortlessly. Perfect for professionals, job seekers, and social media enthusiasts.",
  keywords: 'AI headshot generator, free AI portrait, AI photo creator, free AI image maker, AI selfie generator, free AI photo tool, AI portrait app, free AI headshot software, AI image generator, free AI photo editing'
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
