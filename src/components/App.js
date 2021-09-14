

import './App.scss';
import CardContainer from './CardContainer/CardContainer.component'
import Header from './Header/Header.component'
import Footer from './Footer/Footer.component'

function App() {
  return (
    <div className="App">
        <Header />
          <CardContainer/>
        <Footer />
    </div>
  );
}

export default App;
