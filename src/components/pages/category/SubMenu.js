import { useRef, useState } from "react";
import styled from "styled-components";

const SubCategory = styled.div`
  margin-top: 8px;
  height: 43px;
  background: rgba(248, 249, 251, 0.7);
  display: flex;
  align-items: center;

  ul {
    overflow: auto;
    scrollbar-width: none;
    white-space: nowrap;
    li {
      font-size: 14px;
      font-weight: 500;
      line-height: 17px;
      display: inline-block;
      color: #a3a3a5;
      text-align: center;
      padding: 6px 12px;
      text-decoration: none;
      margin: 0 10px;

      &.active {
        color: #42464b;
        border-radius: 30px;
        background: rgba(177, 224, 34, 0.7);
      }
    }
  }
`;

const SubMenu = ({ submenu = [], subMenuIndex, setSubMenuIndex }) => {
  const onClick = (index) => {
    console.log(index);
    setSubMenuIndex(index);

    const categoryList = document.querySelectorAll(".category_wrap");
    if (categoryList.length > 0) {
      const top = categoryList[index].offsetTop;
      window.scrollTo({ top, bottom: 0, behavior: "smooth" });
    }
  };
  return (
    <SubCategory>
      <ul>
        {submenu.length > 0 &&
          submenu.map((menu, index) => (
            <li
              onClick={() => {
                onClick(index);
              }}
              key={index}
              className={index === subMenuIndex ? "active" : ""}
            >
              {menu.name}
            </li>
          ))}
      </ul>
    </SubCategory>
  );
};
export default SubMenu;
