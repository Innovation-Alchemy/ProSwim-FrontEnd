import {
  homeLocationImage1,
  homeLocationImage2,
  homeLocationImage3,
  homeLocationImage4,
} from '@/assets';
import Title from '../shared/Title';
import LocationImg from './LocationImg';

const locations = [
  {
    title: 'Power Rack Antelias',
    link: 'https://www.google.com/maps/place/Power+Rack+Antelias',
    src: homeLocationImage1,
  },
  {
    title: 'Champs Fitness',
    link: 'https://www.google.com/maps/place/Champs+Fitness',
    src: homeLocationImage2,
  },
  {
    title: 'Dunes Aquatic Center',
    link: 'https://www.google.com/maps/place/Dunes+Aquatic+Center',
    src: homeLocationImage3,
  },
  {
    title: 'Radisson Martinez Blu',
    link: 'https://www.google.com/maps/place/Radisson+Martinez+Blu',
    src: homeLocationImage4,
  },
];

const Location = () => {
  return (
    <div className="flex flex-col items-center">
      <Title secondary="our" primary="location" />
      <div className="mt-[4.4375rem] flex flex-wrap justify-center gap-[3.125rem]">
        {locations.map((location, index) => (
          <LocationImg
            key={index}
            src={location.src}
            title={location.title}
            link={location.link}
            width="42rem"
            height="26.125rem"
          />
        ))}
      </div>
    </div>
  );
};

export default Location;
