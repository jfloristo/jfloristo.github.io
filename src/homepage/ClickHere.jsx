import { Link } from 'react-router-dom';

export default function ClickHere({ isVisible }) {
  if (!isVisible) {
    return null;
  }
  return (
    <div className="container-row center fading">
      <Link to="/LilSmth">
        <button type="button" className="btn btn-primary">
          a lil something for today
        </button>
      </Link>
      <Link to="/theAsk">
        <button type="button" className="btn btn-primary">
          what are we doing tomorrow?
        </button>
      </Link>
    </div>
  );
}
