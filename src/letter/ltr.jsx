import glist from '../imgs/letter.png';
import { Link } from 'react-router-dom';
export default function Lilsmth() {
  return (
    <main className="primary position-relative middle center flex-column gap-3">
      <img className="long-img" src={glist} alt="Letter" />
      <Link to="/">
        <button type="button" className="btn btn-primary">
          home
        </button>
      </Link>
    </main>
  );
}
