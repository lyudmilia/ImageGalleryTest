import ReactImageGallery from "./ReactImageGallery";
import Title from "./Title";
import Footer from "./Footer";
import './App.css';

function App() {
  return (
    <div className="container">
      <Title />
      <ReactImageGallery />
      <Footer />
   </div>
  );
}

export default App;
