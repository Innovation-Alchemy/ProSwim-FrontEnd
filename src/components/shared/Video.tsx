interface VideoProps {
  src: string;
  title: string;
}

const Video: React.FC<VideoProps> = ({ src, title }) => {
  return (
    <div className="relative pb-[56.25%] h-0 overflow-hidden bg-black">
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
    </div>
  );
};

export default Video;
