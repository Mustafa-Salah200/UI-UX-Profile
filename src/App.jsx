import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Portfolios from "./component/Portfolios/Portfolios";
import Service from "./component/Service/Service";
import Skills from "./component/Skills/Skills";
import Testimonials from "./component/Testimonials/Testimonials";

const App = () => {
  return (
    <div>
      <Header />
      <Skills />
      <Service />
      <Portfolios />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
