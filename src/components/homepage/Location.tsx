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
    supervisor: 'Mr Zaki Atrouni',
    phone: '+961 76 979 194',
    website: 'www.proswimlb.com',
  },
  {
    title: 'Champs Fitness',
    link: 'https://www.google.com/maps/place/Champs+Fitness',
    src: homeLocationImage2,
    supervisor: 'Mr Ahmad Sabra',
    phone: '+961 78 949 493',
  },
  {
    title: 'Dunes Aquatic Center',
    link: 'https://www.google.com/maps/place/Dunes+Aquatic+Center',
    src: homeLocationImage3,
    supervisor: 'Mrs Rajaa Khalifeh & Mr Hussein Houredine',
    phone: '+961 78 949 498',
    info: 'Verdun, Dunes center. Multiple swimming activities in an olympic indoor pool considered unique in the city.',
  },
  {
    title: 'Radisson Martinez Blu',
    link: 'https://www.google.com/maps/place/Radisson+Martinez+Blu',
    src: homeLocationImage4,
    supervisor: 'Mr Ziad Awad',
    phone: '+961 78 969 094',
    info: 'Ein Mraysseh, near Phoenicia. Reserved for private and group classes, where coaches & swimmers can benefit from a calm disturbance-free environment.',
  },
];

const Location = () => {
  return (
    <div className="flex flex-col items-center container">
      <Title secondary="our" primary="location" />
      <div className="gap-[3.125rem] w-full grid grid-cols-1 sm:grid-cols-2">
        {locations.map((location, index) => (
          <LocationImg
            key={index}
            src={location.src}
            title={location.title}
            link={location.link}
            supervisor={location.supervisor}
            phone={location.phone}
            info={location.info}
            website={location.website}
          />
        ))}
      </div>
    </div>
  );
};

export default Location;
