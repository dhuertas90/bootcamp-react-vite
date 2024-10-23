import './App.css';
import ImageComponent from './ImageComponent';
// import BannerComponent from './BannerComponent';
import CardComponent from './CardComponent';
import QrComponent from './QrComponent';

function App() {
  return (
    <div className="container">
      <ImageComponent />
      {/* <BannerComponent /> */}
      <CardComponent/>
      <QrComponent/>
    </div>
  );
}

export default App;
