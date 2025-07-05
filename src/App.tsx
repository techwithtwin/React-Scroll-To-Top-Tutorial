import "./App.css";
import ImageDisplay from "./components/ImageDisplay";
import ScrollToTopBtn from "./components/ScrollToTopBtn";

function App() {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 10].map((item) => (
        <ImageDisplay
          id={item}
          imgUrl={`https://randomfox.ca/images/${item}.jpg`}
        />
      ))}
      <ScrollToTopBtn />
    </>
  );
}

export default App;
