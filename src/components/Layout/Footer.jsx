import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-gray-900 dark:via-gray-950 dark:to-black mt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold shadow-lg">
                AM
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">
                  Activity Manager
                </span>
                <span className="text-xs text-gray-400 uppercase tracking-wider">
                  Plan • Track • Enjoy
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Your ultimate companion for organizing and enjoying activities.
              Plan smarter, track better, enjoy more.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin size={16} />
              <span>Syria</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Activities", href: "/activities" },
                { label: "Profile", href: "/profile" },
                { label: "Create Activity", href: "/add-activity" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {[
                { label: "Help Center", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Contact Us", href: "#" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Stay Connected
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest updates and tips for better activity management.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center gap-1">
                  <Mail size={16} />
                  <span className="hidden sm:inline">Subscribe</span>
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "#", color: "hover:text-blue-500" },
                { Icon: Twitter, href: "#", color: "hover:text-sky-500" },
                { Icon: Instagram, href: "#", color: "hover:text-pink-500" },
                { Icon: Youtube, href: "#", color: "hover:text-red-500" },
              ].map(({ Icon, href, color }) => (
                <a
                  key={href}
                  href={href}
                  className={`w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-400 ${color} transition-all duration-200 hover:scale-110 hover:shadow-lg backdrop-blur-sm border border-gray-700/50`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-700/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Activity Manager. All rights
              reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Phone size={14} />
                <span>+963 (987) 123-4567</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail size={14} />
                <span>support@activitymanager.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </footer>
  );
}
