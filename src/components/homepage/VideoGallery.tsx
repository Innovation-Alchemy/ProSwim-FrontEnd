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
    <div className='container'>
      <Title secondary="our" primary="videos" />
      <div className="gap-7"
       style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
      }}
      >
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
