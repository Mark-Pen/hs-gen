import { MonitorCheck, Ratio, Bot, MonitorSmartphone, CircleDollarSign, Image } from "lucide-react";

const FunctionDescriptionList = [
  {
    title: 'Easy-to-Use Interface',
    desc: 'Our AI headshot generator offers a user-friendly interface designed for simplicity and efficiency. With just a few clicks, users can upload their photos and let the AI do the rest, ensuring a hassle-free experience for everyone.',
  },
  {
    title: 'High-Quality Results',
    desc: 'Leveraging advanced AI technology, our headshot generator produces high-quality, professional-looking images. It automatically adjusts lighting, removes backgrounds, and enhances facial features to create stunning headshots that stand out.',
  },
  {
    title: 'Multiple Style Options',
    desc: 'Choose from a variety of style options to suit your needs. Whether you prefer a classic, corporate look or something more modern and creative, our AI headshot generator has you covered. Customize your headshot to match your personal or professional brand.',
  },
  {
    title: 'Instant Processing',
    desc: 'Say goodbye to long waiting times. Our AI headshot generator processes images instantly, allowing you to preview and download your new headshot within seconds. This quick turnaround ensures you can update your profile picture anytime, anywhere.',
  },
  {
    title: 'Mobile-Friendly',
    desc: 'Access our AI headshot generator on any device, including smartphones and tablets. The mobile-friendly design ensures that you can create professional headshots on the go, making it convenient for users who are always on the move.',
  },
  {
    title: 'Free for First-Time Users',
    desc: `We believe in making professional headshots accessible to everyone. That's why we offer our AI headshot generator for free to first-time users. Experience the quality and convenience without any initial cost, and decide for yourself the value it brings to your professional image.`,
  }
]

export default function FunctionDescription() {

  return (
    <div className="w-full max-w-6xl p-8 rounded-lg">
      <div className="mx-auto max-w-3xl text-left md:text-center">
        <p className="text-sm font-normal text-paragraph sm:text-base lg:text-lg">🇬🇧 Founded in England We respect your privacy.</p>
        <h2 className="text-3xl font-bold text-center">
          Why Do You Need AI Headshot Generator Free
        </h2>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 md:grid-cols-3">
        {
          FunctionDescriptionList.map((item, index) => {
            return <div className="rounded-lg border border-primary-500/15 bg-white px-6 pb-6 pt-8 shadow-[0_0px_75px_0px_rgba(0,0,0,0.07)]">
              {
                index === 0 && <MonitorCheck size="30" color="#478CCF" />
              }
              {
                index === 1 && <Image size="30" color="#EF9C66" />
              }
              {
                index === 2 && <Ratio size="30" color="#E90074" />
              }
              {
                index === 3 && <Bot size="30" color="#36BA98" />
              }
              {
                index === 4 && <MonitorSmartphone size="30" color="#597445" />
              }
              {
                index === 5 && <CircleDollarSign size="30" color="#640D6B" />
              }
              <h3 className="mt-5 text-lg font-bold leading-tight tracking-[-0.3px] text-primary-500">{item.title}</h3>
              <p className="mt-2 text-base font-normal tracking-[-0.3px] text-paragraph text-gray-500">{item.desc}</p>
            </div>
          })
        }
      </div>
    </div>
  );
}
