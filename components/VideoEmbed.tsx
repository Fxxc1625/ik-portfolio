interface VideoEmbedProps {
  url: string;
  title?: string;
  className?: string;
}

function getEmbedUrl(url: string): string | null {
  // YouTube
  const ytMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;

  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;

  return null;
}

export default function VideoEmbed({ url, title, className = "" }: VideoEmbedProps) {
  const embedUrl = getEmbedUrl(url);

  if (!embedUrl) return null;

  return (
    <div className={`relative aspect-video overflow-hidden rounded-xl bg-surface ${className}`}>
      <iframe
        src={embedUrl}
        title={title ?? "Video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
