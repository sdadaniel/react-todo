import styled from "styled-components";
import { useNavigate } from "react-router";

const CategoryList = styled.div`
  ul {
    overflow: auto;
    scrollbar-width: none;
    white-space: nowrap;

    li {
      font-size: 18px;
      display: inline-block;
      text-align: center;
      padding: 14px 0px;
      margin-right: 30px;
      text-decoration: none;
      font-weight: bold;
      color: #a3a4a5;
      font-weight: 700;
      &.active {
        color: #161616;
        border-bottom: 3px solid #000;
      }

      &:nth-child(1) {
        margin-left: 15px;
      }
    }
  }

  //   li.category {
  //     &__item {
  //       float: left;
  //     }
  //   }
`;
const MainMenu = ({
  menus = [],
  selectedCategory = "",
  setselectedCategory = () => null,
  setSubMenuIndex,
}) => {
  const navigate = useNavigate();
  const onClick = (menu) => {
    setselectedCategory(menu.value);
    setSubMenuIndex(0);
    navigate(`/category/${menu.value}`);
  };

  return (
    <>
      {selectedCategory && (
        <CategoryList>
          <ul>
            {menus.map((menu, index) => (
              <li
                className={menu.value === selectedCategory ? "active" : ""}
                key={index}
                onClick={() => onClick(menu)}
              >
                {menu.name}
              </li>
            ))}
          </ul>
        </CategoryList>
      )}
    </>
  );
};

export default MainMenu;
