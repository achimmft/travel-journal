import "./App.css";
import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./lib/data";

function App() {
  const entryElements = data.map((entry) => (
    <Entry
      img={{ src: entry.img.src, alt: entry.img.alt }}
      title={entry.title}
      country={entry.country}
      googleMapsLink={entry.googleMapsLink}
      dates={entry.dates}
      text={entry.text}
    />
  ));

  return (
    <>
      <Header />
      <main className="container">{entryElements}</main>
    </>
  );
}

export default App;
