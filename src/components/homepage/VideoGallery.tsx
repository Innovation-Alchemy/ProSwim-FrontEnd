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
    <div>
      <Title secondary="our" primary="videos" />
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-7">
        {videos.map((video, index) => (
          <div key={index}>
            <Video src={video.src} title={video.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
