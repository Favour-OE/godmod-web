import { CultureIcon, CrossIcon, PeopleIcon } from './Icons';

interface PillarData {
  num: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const pillarsData: PillarData[] = [
	{
		num: "01",
		icon: <CrossIcon className="pillar-icon" />,
		title: "Kingdom First",
		description:
			"Every caption, every graphic, every reel is a declaration: God's kingdom is here, active, and advancing. Content as proclamation.",
	},
	{
		num: "02",
		icon: <CultureIcon className="pillar-icon" />,
		title: "Culture Shift",
		description:
			"We engage culture where it lives — in aesthetics, in language, and in ideas, redirecting it towards truth. Not behind the church walls. Out here.",
	},

	{
		num: "03",
		icon: <PeopleIcon className="pillar-icon" />,
		title: "Real People",
		description:
			"No religious performance. Real struggle, real faith, real transformation. We speak the language of the streets and the scripture.",
	},
];

export const Pillars = () => {
  return (
    <section className="section" id="pillars">
      <p className="section-label reveal">What We Stand For</p>
      <h2 className="section-title reveal">Three Pillars<br />of GodMod</h2>

      <div className="pillars reveal">
        {pillarsData.map((pillar) => (
          <div className="pillar" key={pillar.num}>
            <span className="pillar-num">{pillar.num}</span>
            {pillar.icon}
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
