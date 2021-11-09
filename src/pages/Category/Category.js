import "./Category.scss";
import { Header, Category as CategoryHeader, Footer } from "../components";
import {
  FilterCard,
  ProjectCardHorizontal,
  CategorySummaryCard,
} from "../../components";
function Category() {
  return (
    <div className="rightSidebar">
      <Header />
      <CategoryHeader />
      <CategorySummaryCard />
      <div className="container">
        <div className="sidebar">
          <FilterCard />
        </div>
        <div className="content">
          <ProjectCardHorizontal />
          <ProjectCardHorizontal />
          <ProjectCardHorizontal />
          <ProjectCardHorizontal />
          <ProjectCardHorizontal />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Category;