"use client";
import { Heart, Github, Twitter, Instagram } from "lucide-react";
import Image from "next/image";
import useAnalytics from "@/tracking/useAnalytics";
import { useFooterMessages } from "@/i18n/hooks/useFooterMessages";

export default function Footer() {
  const { trackSocialClick, trackNavigationClick } = useAnalytics();
  const footerMessages = useFooterMessages();

  const handleExternalLinkClick = (href: string, platform: string) => {
    trackSocialClick(platform.toLowerCase());
    window.open(href, "_blank", "noopener,noreferrer");
  };

  const handleInternalLinkClick = (href: string) => {
    const slug = href.replace(/^\//, "").replace("#", "");
    trackNavigationClick("footer", slug);
    window.location.href = href;
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Image
              src="https://velox-images-bucket.s3.sa-east-1.amazonaws.com/public/logo-transparent-velox.png"
              alt={footerMessages.logoAlt}
              width={120}
              height={40}
              className="mb-4"
            />
            <div className="text-xs text-background/80 leading-relaxed space-y-2 mb-4">
              {footerMessages.description.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="flex gap-4">
              <button
                onClick={() =>
                  handleExternalLinkClick(
                    "https://github.com/MurilloWolf",
                    "github"
                  )
                }
                aria-label={footerMessages.social.ariaLabels.github}
                className="hover:text-[#d5fe46] transition-colors cursor-pointer"
              >
                <Github className="h-5 w-5" />
              </button>
              <button
                onClick={() =>
                  handleExternalLinkClick(
                    "https://twitter.com/RunningVelox",
                    "twitter"
                  )
                }
                aria-label={footerMessages.social.ariaLabels.twitter}
                className="hover:text-[#d5fe46] transition-colors cursor-pointer"
              >
                <Twitter className="h-5 w-5" />
              </button>
              <button
                onClick={() =>
                  handleExternalLinkClick(
                    "https://www.instagram.com/runningvelox/",
                    "instagram"
                  )
                }
                aria-label={footerMessages.social.ariaLabels.instagram}
                className="hover:text-[#d5fe46] transition-colors cursor-pointer"
              >
                <Instagram className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-[#d5fe46]">
              {footerMessages.quickLinks.title}
            </h4>
            <ul className="space-y-2 text-sm text-background/80">
              {footerMessages.quickLinks.links.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleInternalLinkClick(link.href)}
                    className="hover:text-[#d5fe46] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-[#d5fe46]">
              {footerMessages.legalLinks.title}
            </h4>
            <ul className="space-y-2 text-sm text-background/80">
              {footerMessages.legalLinks.links.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleInternalLinkClick(link.href)}
                    className="hover:text-[#d5fe46] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-background/20 text-center text-sm text-background/60">
          <p className="flex items-center justify-center gap-2">
            {footerMessages.community.madeWith}{" "}
            <Heart className="h-4 w-4 text-[#d5fe46] fill-[#d5fe46]" />{" "}
            {footerMessages.community.footerNote}
          </p>
          <p className="mt-2">{footerMessages.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
