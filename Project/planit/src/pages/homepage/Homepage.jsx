import Header from "../../components/header/Header";
import Categories from "../../components/categories/Categories";
import "./Homepage.css";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div className="homepage">
      <Header />
      <div className="home">
        <Categories />
      </div>
      <Footer />
    </div>
  );
}
