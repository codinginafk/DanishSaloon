"use client";

import { useState, type CSSProperties } from "react";
import Image, { type ImageProps } from "next/image";

type Props = Omit<ImageProps, "src" | "onError"> & {
  src: string;
  alt: string;
  fallbackSrc?: string;
  fade?: boolean;
};

const FALLBACK =
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80";

export function SmartImage({
  src,
  alt,
  fallbackSrc = FALLBACK,
  fade = true,
  className = "",
  ...rest
}: Props) {
  const [current, setCurrent] = useState(src);
  const [loaded, setLoaded] = useState(false);

  if (current !== fallbackSrc) {
    return (
      <InternalImage
        {...rest}
        src={current}
        alt={alt}
        className={className}
        onPrimaryError={() => setCurrent(fallbackSrc)}
        onLoad={fade ? () => setLoaded(true) : undefined}
        loaded={loaded}
      />
    );
  }

  return (
    <InternalImage
      {...rest}
      src={current}
      alt={alt}
      className={className}
      onPrimaryError={undefined}
      onLoad={fade ? () => setLoaded(true) : undefined}
      loaded={loaded}
    />
  );
}

type InternalProps = Omit<ImageProps, "src" | "onError"> & {
  src: string;
  alt: string;
  onPrimaryError?: (() => void) | undefined;
  onLoad?: (() => void) | undefined;
  loaded: boolean;
};

function InternalImage({
  src,
  alt,
  onPrimaryError,
  onLoad,
  loaded,
  className,
  ...rest
}: InternalProps) {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const ready = loaded || imgLoaded;

  if (imgError && onPrimaryError) {
    // retry with fallback from caller
    onPrimaryError();
    setImgError(false);
    setImgLoaded(false);
    return null;
  }

  return (
    <div
      style={{ position: "relative", width: "100%", height: "100%" }}
      className={className}
    >
      {/* Next/Image */}
      <Image
        {...rest}
        src={src}
        alt={alt}
        onLoadingComplete={(r) => {
          setImgLoaded(true);
          onLoad?.();
        }}
        onError={() => {
          setImgError(true);
        }}
        style={{
          opacity: ready ? 1 : 0,
          transition: "opacity 0.3s ease-out",
        }}
      />
    </div>
  );
}
