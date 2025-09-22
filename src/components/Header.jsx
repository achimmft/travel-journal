import globe from "../assets/globe.jfif"


export default function Header() {
  return (
    <>
      <header>
        <img src= {globe} alt="globe icon" />
        <h1>my travel journal</h1>
      </header>
    </>
  );
}
