import styled from "styled-components";
import List from "./List";

const Wrap = styled.div`
  margin: 10px 15px;

  .item_box {
    display: flex;
  }

  .title {
    color: #161616;
    font-size: 18px;
    line-height: 22px;
    min-height: 20px;
    font-weight: 700;
    margin: 10px 0px;
  }
  .list_box {
    display: flex;
    flex-wrap: wrap;
  }
`;

const CategoryItem = ({ subCategory }) => (
  <Wrap className="category_wrap">
    <p className="title">{subCategory.name}</p>
    <div className="list_box">
      <List products={subCategory.product} />
    </div>
  </Wrap>
);
export default CategoryItem;
