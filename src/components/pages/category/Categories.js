import CategoryItem from "./CategoryItem";

const Categories = ({ subMenus = [] }) => {
  return (
    <div className="categories__container">
      {subMenus.length > 0 &&
        subMenus.map((subCategory, index) => (
          <CategoryItem subCategory={subCategory} key={index} />
        ))}
    </div>
  );
};

export default Categories;
