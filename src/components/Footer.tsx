export function Footer() {

  const socialLinks = [
    { name: "Twitter", href: "https://x.com/i/communities/1974806504373989696", icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
  ];

  return (
    <footer id="community" className="relative bg-gradient-to-b from-gray-950 to-background border-t border-border/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239945FF' fill-opacity='0.3'%3E%3Cpath d='M20 20v20H0V20H20zM40 20v20H20V20H40z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Content Section */}
        <div className="py-16 text-center">
          {/* Logo and Description */}
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h3 className="text-2xl font-heading font-bold gradient-text">Solanians</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building the future of decentralized applications on Solana. Fast, scalable, and community-driven.
            </p>
            {/* Social Links */}
            <div className="flex justify-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center group transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border/30">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-sm text-gray-400">Built with</span>
              <svg className="w-5 h-5 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-400">by Solanians</span>
            </div>
            <p className="text-sm text-gray-400">© 2025 Solanians. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}