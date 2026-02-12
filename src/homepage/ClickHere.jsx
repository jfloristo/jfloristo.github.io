import { Link } from 'react-router-dom';

export default function ClickHere({ isVisible }) {
  if (!isVisible) {
    return null;
  }
  return (
    <div className="container-row center fading">
      <Link to="/theAsk">
        <button type="button" className="btn btn-primary">
          Kindly click here, my love
        </button>
      </Link>
    </div>
  );
}
