import MainMenu from "../components/pages/category/MainMenu";
import menus from "../page/category/variables";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategoryData,
  setSelectedCategory,
  setSubMenuIndex,
} from "../redux/categoryReducer";
import SubMenu from "../components/pages/category/SubMenu";
import { useEffect } from "react";
import Categories from "../components/pages/category/Categories";

const CategoryContainer = () => {
  const dispatch = useDispatch();

  useSelector((state) => {
    return state.categoryReducer;
  });

  const { selectedCategory, categoryData, subMenuIndex } = useSelector(
    (state) => state.categoryReducer
  );

  useEffect(() => {
    dispatch(
      setCategoryData(menus.find((menu) => menu.value === selectedCategory))
    );
  }, [selectedCategory, dispatch]);

  return (
    <>
      <MainMenu
        menus={menus}
        selectedCategory={selectedCategory}
        setSelectedCategory={(category) =>
          dispatch(setSelectedCategory(category))
        }
        setSubMenuIndex={setSubMenuIndex}
      />

      <SubMenu
        subMenuIndex={subMenuIndex}
        setSubMenuIndex={(index) => dispatch(setSubMenuIndex(index))}
        submenu={categoryData.children}
      />

      <Categories
        subMenus={categoryData.children ? categoryData.children : []}
      />
    </>
  );
};

export default CategoryContainer;
