import glist from '../imgs/glist.png';
export default function YesNaYes() {
  return (
    <main className="primary position-relative">
      <div className="center p-3">
        <h1>Yahoo! Here's our itinerary for February 14:</h1>
      </div>
      <div className="d-flex justify-content-center flex-row">
        <div className="d-flex justify-content-center">
          <div className="content-box d-flex flex-column gap-2 [-3">
            <h2>A lil sidequest:</h2>
            <div>
              <h5>WHAT: Grocery Run</h5>
              <h5>WHEN: February 14, 2026, earlier than 8:00 PM</h5>
              <h5>WHERE: Any grocery with you</h5>
            </div>
            <h3>Here's our shopping list!</h3>
            <img className="long-img" src={glist} alt="Be my Valentine" />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="content-box d-flex flex-column gap-2 p-3">
            <h2>Our main event:</h2>
            <div>
              <h5>WHAT: About Us But Not About Us</h5>
              <h5>WHEN: February 14, 2026 8:00 PM</h5>
              <h5>WHERE: Power Mac Center Spotlight Blackbox Theater, Ayala Malls Circuit</h5>
            </div>
            <img
              className="mid-img"
              src="https://m.media-amazon.com/images/S/pv-target-images/1699a4bda36d5011923cb38db43b05c1291265fe3b667e7c6bdff234f96ad978.jpg"
              alt="Be my Valentine"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
