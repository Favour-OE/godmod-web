import { StarIcon } from './Icons';

export const Divider = ({ padding = '2rem' }: { padding?: string }) => (
  <div className="divider" style={{ padding }}>
    <div className="divider-line"></div>
    <span className="divider-icon">
      <StarIcon />
    </span>
    <div className="divider-line"></div>
  </div>
);
