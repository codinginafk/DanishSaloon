"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
};

const FALLBACK =
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80";

export function SmartImage({ src, alt, fallbackSrc = FALLBACK, className = "" }: Props) {
  const [current, setCurrent] = useState(src);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleError = () => {
    if (current !== fallbackSrc) {
      setCurrent(fallbackSrc);
    }
    setError(true);
  };

  return (
    <img
      src={current}
      alt={alt}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      onError={handleError}
      className={`${className} ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
    />
  );
}
