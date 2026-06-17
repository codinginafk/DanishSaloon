"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  quality?: number;
};

export function SmartImage({
  src,
  alt,
  width,
  height,
  fill = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
  className = "",
  containerClassName = "",
  quality = 85
}: Props) {
  const [error, setError] = useState(false);

  const handleError = () => setError(true);

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-ink-100 dark:bg-charcoal-800 ${containerClassName}`}>
        <div className="flex flex-col items-center gap-2 p-4 text-center">
          <svg className="h-10 w-10 text-ink-300 dark:text-charcoal-600" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5z" />
          </svg>
          <span className="text-xs text-ink-400 dark:text-charcoal-500">{alt}</span>
        </div>
      </div>
    );
  }

  if (fill) {
    return (
      <div className={`relative ${containerClassName}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          quality={quality}
          priority={priority}
          onError={handleError}
          className={`object-cover ${className}`}
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      sizes={sizes}
      quality={quality}
      priority={priority}
      onError={handleError}
      className={className}
    />
  );
}
