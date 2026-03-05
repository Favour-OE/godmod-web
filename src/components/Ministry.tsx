import { BibleIcon, PodcastIcon, TestimonyIcon, ReelsIcon, ShoutIcon, CrossIcon } from './Icons';

interface ContentCardData {
  cardClass: string;
  icon: React.ReactNode;
  type: string;
  title: string;
}

const contentCards: ContentCardData[] = [
  {
    cardClass: 'card-1',
    icon: <BibleIcon className="card-emoji" />,
    type: 'Daily',
    title: 'Scripture Drop'
  },
  {
    cardClass: 'card-2',
    icon: <PodcastIcon className="card-emoji" />,
    type: 'Weekly',
    title: 'Culture Commentary'
  },
  {
    cardClass: 'card-3',
    icon: <CrossIcon className="card-emoji" />,
    type: 'Monthly',
    title: 'Bible Study'
  },
  {
    cardClass: 'card-4',
    icon: <TestimonyIcon className="card-emoji" />,
    type: 'Testimony',
    title: 'Real Stories'
  },
  {
    cardClass: 'card-5',
    icon: <ReelsIcon className="card-emoji" />,
    type: 'Reels',
    title: 'Viral Truth'
  },
  {
    cardClass: 'card-6',
    icon: <ShoutIcon className="card-emoji" />,
    type: 'Post cards',
    title: 'Bold Declarations'
  }
];

export const Ministry = () => {
  return (
    <section className="section" id="ministries">
      <p className="section-label reveal">The Way We deliver </p>
      <h2 className="section-title reveal">Six Ministry <br /> Streams</h2>
      <div className="content-grid reveal">
        {contentCards.map((card, index) => (
          <div className={`content-card ${card.cardClass}`} key={index}>
            <div className="card-inner">
              {card.icon}
              <p className="card-type">{card.type}</p>
              <p className="card-title">{card.title}</p>
            </div>
            <div className="card-border"></div>
          </div>
        ))}
      </div>
    </section>
  );
};
