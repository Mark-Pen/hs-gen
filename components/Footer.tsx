export default function Footer() {
  return (
    <footer className="pt-8 pb-16 bg-gray-50 border-t border-gray-200">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 lg:grid-cols-4 lg:mt-10">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <a href="/" className="flex nuxt-link-active">
              <img src='./logo_horizontal.png' alt="" className="h-20 w-auto" />
            </a>
            <p className="mt-4 text-base font-normal text-gray-500">
              AI Headshot Generator Free - Create Professional Photos
            </p>
            <p className="text-sm font-normal text-gray-400 mt-4">
              © 2024 [aiheadshotgeneratorfree.com]. All rights reserved.
            </p>
          </div>
          <div className="lg:pl-24">
            <p className="text-xs font-medium tracking-widest text-primary-500 uppercase">Contact Us</p>
            <ul className="mt-8 space-y-5">
              <li>
                <span className="inline-flex text-sm font-normal text-gray-600  hover:text-gray-900">
                  aiheadshot.suppot@gmail.com
                </span>
              </li>
            </ul>
          </div>
          <div className="lg:pl-24">
            <p className="text-xs font-medium tracking-widest text-primary-500 uppercase">Links</p>
            <ul className="mt-8 space-y-5">
              <li>
                <a href="/" className="inline-flex text-sm font-normal text-gray-600  hover:text-gray-900">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
