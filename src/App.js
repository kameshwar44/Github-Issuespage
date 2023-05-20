import Footer from "./components/Footer";
import Header from "./components/Header";
import IssuesContainer from "./components/IssuesContainer";
import "./App.css";

function App() {
  return (
    <div className="container box-center">
      <Header />
      <IssuesContainer />
      <Footer />
    </div>
  );
}

export default App;