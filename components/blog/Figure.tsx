import Image from "next/image";

interface FigureProps {
  src?: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function Figure({
  src,
  alt,
  caption,
  width = 1200,
  height = 675,
  priority = false,
}: FigureProps) {
  const showPlaceholders = process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS === "true";
  const hasImage = Boolean(src && src.trim().length > 0);

  // In production, render NOTHING if image source is empty
  if (!hasImage && !showPlaceholders) {
    return null;
  }

  if (!hasImage && showPlaceholders) {
    return (
      <figure className="my-8 rounded-2xl border-2 border-dashed border-light-muted/30 bg-light-surface p-8 text-center">
        <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/10 text-amber-800 flex items-center justify-center mb-3">
          🖼️
        </div>
        <p className="text-sm font-semibold text-light-text mb-1">
          Image Placeholder (Dev Only)
        </p>
        <p className="text-xs text-light-muted max-w-sm mx-auto">
          {alt}
        </p>
        {caption && (
          <figcaption className="mt-3 text-xs text-light-muted italic">
            Caption: {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className="my-8">
      <div className="rounded-2xl overflow-hidden border border-light-muted/20 bg-light-surface shadow-sm aspect-video relative">
        <Image
          src={src!}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          unoptimized
          className="w-full h-auto object-cover"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-xs sm:text-sm text-light-muted italic leading-normal">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
