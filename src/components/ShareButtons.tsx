"use client";

import { siteConfig } from "@/lib/siteConfig";

type Props = { title: string; slug: string };

export default function ShareButtons({ title, slug }: Props) {
  const url = `${siteConfig.url}/blog/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347",
      bg: "bg-[#25D366]"
    },
    {
      name: "X (Twitter)",
      href: `https://x.com/intent/post?text=${encodedTitle}&url=${encodedUrl}`,
      icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
      bg: "bg-black dark:bg-white dark:text-black"
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
      bg: "bg-[#1877F2]"
    },
    {
      name: "Copy Link",
      href: "#",
      icon: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244",
      bg: "bg-ink-500 dark:bg-ink-600",
      onClick: true
    }
  ];

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(url).catch(() => {});
    const btn = e.currentTarget as HTMLAnchorElement;
    const span = btn.querySelector("span");
    if (span) {
      const original = span.textContent;
      span.textContent = "Copied!";
      setTimeout(() => { span.textContent = original; }, 1500);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-ink-100 dark:border-white/10">
      <span className="text-xs font-semibold uppercase tracking-wider text-ink-400 dark:text-white/50 mr-2">Share</span>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target={link.onClick ? undefined : "_blank"}
          rel="noopener noreferrer"
          onClick={link.onClick ? handleCopy : undefined}
          className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-medium text-white transition hover:opacity-90 ${link.bg}`}
          title={link.name}
        >
          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d={link.icon} />
          </svg>
          <span>{link.name}</span>
        </a>
      ))}
    </div>
  );
}
