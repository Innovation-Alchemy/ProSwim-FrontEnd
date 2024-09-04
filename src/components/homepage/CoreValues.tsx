import { homeCardImage1, homeCardImage2, homeCardImage3 } from '@/assets';
import Card from './Card';
import Title from '../shared/Title';

type CardData = {
  title: string;
  paragraph: string;
  img: string;
  isRotated: boolean;
};

const cardData: CardData[] = [
  {
    title: 'our philosophy',
    paragraph: `We believe that there is only one of you..
and this is the super power! Based on that,
we customize a teaching style that works
best for each individual’s different needs,
abilities, desires, talents, strength & weak
points and many other important factors.`,
    img: homeCardImage1,
    isRotated: true,
  },
  {
    title: 'our mission',
    paragraph: `From a physical standpoint, our mission is
to teach the correct techniques of swimming,
in a fun & safe environment! Starting at early
stages and continually refining the strokes
through the years of training. It’s critical to
make sure kids have the fundamental.`,
    img: homeCardImage2,
    isRotated: false,
  },
  {
    title: 'our goal',
    paragraph: `Our goals are many. Starting from teach life
lessons and values through swimming
which are equally important to techniques
and skills, up to building and maintaining a
united cooperative competitive team with the
highest spirit, technique levels and challenging
energy`,
    img: homeCardImage3,
    isRotated: false,
  },
];

const CoreValues = () => {
  return (
    <div className="w-full flex items-center flex-col mx-[4.375rem]">
      <Title secondary={'our'} primary={'core values'} />
      <div className="flex flex-col sm:flex-row gap-[3.4375rem]">
        {cardData.map(card => {
          return (
            <Card
              key={card.title}
              title={card.title}
              text={card.paragraph}
              img={card.img}
              isRotated={card.isRotated}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CoreValues;
