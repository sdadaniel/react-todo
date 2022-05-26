import styled from "styled-components";

const Wrap = styled.div`
  flex: 0 0 50%;
  box-sizing: border-box;
  margin-top: 8px;

  &:nth-child(2n) {
    padding: 0px 0px 20px 10px;
  }
  &:nth-child(2n + 1) {
    padding: 0px 10px 20px 0px;
  }
  .image {
    width: 100%;
    height: 230px;
    background: #efefef;
    border-radius: 15px;
    overflow: hidden;
  }

  .salesprice {
    margin-bottom: 5px;
    font-size: 17px;
    font-weight: 500;
    &:after {
      content: "원";
      margin-left: 3px;
    }
    .rate {
      color: red;
      font-weight: 700;
      & .number {
        font-weight: normal;
      }
      margin-right: 4px;
    }
  }

  .price {
    font-size: 12px;
    color: #aaa;
    text-decoration-line: line-through;
    margin-bottom: 5px;
    &:after {
      content: "원";
      margin-left: 3px;
    }
  }

  .review {
    font-weight: 500;
    .number {
      margin-left: 5px;
    }
    .star {
      color: blue;
    }
  }
`;

const List = ({ products }) => {
  return products.map((product, index) => (
    <Wrap key={index}>
      <div className="image"></div>
      <div className="title" key={index}>
        {product.name}
      </div>
      <div className="salesprice">
        <span className="rate">90%</span>100
      </div>
      <div className="price">100</div>
      <div className="review">
        <span className="star">★</span>4.3<span className="number">(312)</span>
      </div>
    </Wrap>
  ));
};

export default List;
