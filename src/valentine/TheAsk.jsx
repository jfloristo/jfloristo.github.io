import { Link } from 'react-router-dom';

export default function TheAsk() {
  return (
    <main className="primary container position-relative middle center">
      <h1>I just have one question for you,</h1>
      <img
        src="https://eventstodayz.com/wp-content/uploads/2022/01/be-my-valentine-gif-image.gif"
        alt="Be my Valentine"
      />

      <div className="d-flex justify-content-center gap-2 flex-wrap">
        <Link to="/YesNaYes">
          <button type="button" className="btn btn-primary">
            Yes
          </button>
        </Link>
        <Link to="/YesNaYes">
          <button type="button" className="btn btn-primary">
            Yes na yes!
          </button>
        </Link>
        <button type="button" className="btn btn-disabled" disabled>
          No
        </button>
      </div>
    </main>
  );
}
