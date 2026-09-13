const Footer = () => {
  return (
    <footer className="border-t border-blue-500 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-12">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-purple-500 to-pink-500 text-[10px] font-bold text-white">
                DS
              </div>

              <h2 className="text-sm font-semibold">
                <span className="text-slate-800">Dev</span>
                <span className="text-pink-500"> Stack</span>
              </h2>
            </div>

            <p className="mt-3 max-w-sm text-[11px] leading-5 text-slate-400">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-4 flex gap-4 text-[11px] text-slate-700">
              <a href="#" className="hover:text-pink-500">
                GitHub
              </a>

              <a href="#" className="hover:text-pink-500">
                Twitter
              </a>

              <a href="#" className="hover:text-pink-500">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-[10px] font-bold uppercase tracking-wide text-slate-800">
              Product
            </h3>

            <ul className="space-y-2 text-[11px] text-slate-400">
              <li>
                <a href="#" className="hover:text-slate-700">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-slate-700">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-slate-700">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-[10px] font-bold uppercase tracking-wide text-slate-800">
              Company
            </h3>

            <ul className="space-y-2 text-[11px] text-slate-400">
              <li>
                <a href="#" className="hover:text-slate-700">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-slate-700">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-slate-700">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-[10px] font-bold uppercase tracking-wide text-slate-800">
              Legal
            </h3>

            <ul className="space-y-2 text-[11px] text-slate-400">
              <li>
                <a href="#" className="hover:text-slate-700">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-slate-700">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 border-t border-slate-100 pt-6">
          <div className="flex flex-col gap-3 text-[10px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            
            <p>
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex gap-5">
              <a href="#" className="hover:text-slate-700">
                Privacy
              </a>

              <a href="#" className="hover:text-slate-700">
                Terms
              </a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;