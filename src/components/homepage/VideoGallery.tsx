import Title from '../shared/Title';
import Video from '../shared/Video';

const videos = [
  {
    src: 'https://www.youtube.com/embed/ddVk6agBlF0',
    title: 'Because we care..Your safety is our concern!!!',
  },
  {
    src: 'https://www.youtube.com/embed/ddVk6agBlF0',
    title: 'Because we care..Your safety is our concern!!!',
  },
  {
    src: 'https://www.youtube.com/embed/ddVk6agBlF0',
    title: 'Because we care..Your safety is our concern!!!',
  },
  {
    src: 'https://www.youtube.com/embed/ddVk6agBlF0',
    title: 'Because we care..Your safety is our concern!!!',
  },
  {
    src: 'https://www.youtube.com/embed/ddVk6agBlF0',
    title: 'Because we care..Your safety is our concern!!!',
  },
  {
    src: 'https://www.youtube.com/embed/ddVk6agBlF0',
    title: 'Because we care..Your safety is our concern!!!',
  },
];

const VideoGallery: React.FC = () => {
  return (
    <div className="mx-[4.375rem]">
      <Title secondary="our" primary="videos" />
      <div className="mt-8 flex flex-wrap gap-7">
        {videos.map((video, index) => (
          <div key={index} className="w-full sm:w-1/3 lg:w-1/3">
            <Video src={video.src} title={video.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
