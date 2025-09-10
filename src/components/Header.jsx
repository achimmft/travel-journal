import globe from "../assets/globe.jfif"

export default function Header() {
  return (
    <>
      <header>
        <img src= {globe} alt="" />
        <span>my travel journal</span>
      </header>
    </>
  );
}
