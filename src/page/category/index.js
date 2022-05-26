import { useEffect, useState } from "react";
import menus from "./variables";
import MainMenu from "../../components/pages/category/MainMenu";
import SubMenu from "../../components/pages/category/SubMenu";
import Categories from "../../components/pages/category/Categories";
import { useParams } from "react-router";

const Page = () => {
  const { name } = useParams();
  const [selectedCategory, setselectedCategory] = useState(name);
  const [categoryData, setCategoryData] = useState([]);
  const [subMenuIndex, setSubMenuIndex] = useState(0);

  useEffect(() => {
    setCategoryData(menus.find((menu) => menu.value === selectedCategory));
  }, [selectedCategory]);

  return (
    <>
      <MainMenu
        menus={menus}
        selectedCategory={selectedCategory}
        setselectedCategory={setselectedCategory}
        setSubMenuIndex={setSubMenuIndex}
      />
      <SubMenu
        subMenuIndex={subMenuIndex}
        setSubMenuIndex={setSubMenuIndex}
        submenu={categoryData.children ? categoryData.children : []}
      />
      <Categories
        subMenus={categoryData.children ? categoryData.children : []}
      />
    </>
  );
};
export default Page;
