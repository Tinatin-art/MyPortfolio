import {Header,
        Contacts,
        Footer,
        Intro,
        Portfolio,
        Works,
        Menu } from './components';
import {useState, useEffect} from 'react';
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };


  return (
    <div className="App">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu 
        items={[
          {name: "home", link: "intro"},
          {name: "portfolio", link: "portfolio"},
          {name: "testimonials", link: "testimonials"},
          {name: "contacts", link: "contacts"},
        ]}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Intro/>
      <Portfolio/>
      <Works/>
      <Contacts/>
      <Footer/>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
    </div>
  );
}

export default App;
