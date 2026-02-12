export default function MainMessage({ isVisible }) {
  const text = "Happy 30th monthsarry, and advanced happy Valentine's day, my love! ";

  if (!isVisible) {
    return null;
  }

  return (
    <div className="primary fading">
      <p className="pre-line center-text">{text}</p>
    </div>
  );
}
