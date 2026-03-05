
import { StarIcon } from "./Icons";

export const Hero = () => {


	return (
		<section className="hero">
			<div className="hero-bg"></div>
			<div className="hero-lines"></div>
			<div className="cross-mark"></div>

			<div className="hero-content">
				<p className="tagline-pre">
					<StarIcon className="tagline-star" /> A faith-forward
					movement <StarIcon className="tagline-star" />
				</p>
				<h1 className="logo">
					<span className="logo-god">GOD</span>
					<span className="logo-mod">MOD</span>

					<span className="logo-sub">...towards the kingdom</span>
				</h1>
				<p className="mission-text">
					We exist to shift the natural conversation — one statement,
					one moment, one soul at a time. Heaven's influence,
					expressed through modern life.
				</p>
				<div className="cta-row">
					<a href="#mission" className="btn btn-outline">
						The Mission
					</a>
					<a href="#pillars" className="btn btn-outline">
						3 PILLARS
					</a>
					<a href="#ministries" className="btn btn-outline">
						6 Ministries
					</a>
				</div>
			</div>
		</section>
	);
};
