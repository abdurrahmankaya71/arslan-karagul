"use client";

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
}

const YouTubePlayer = ({ videoId, title }: YouTubePlayerProps) => {
  return (
    <div className="w-full">
      {title && <h3 className="text-xl font-bold m-3">{title}</h3>}
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title || "YouTube video"}
          className="absolute top-0 left-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubePlayer;
