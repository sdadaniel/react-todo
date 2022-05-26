const menus = [
  {
    name: "베스트",
    value: "best",
    children: [
      {
        name: "베스트1",
        product: [
          { name: "상품1" },
          { name: "상품2" },
          { name: "상품3" },
          { name: "상품4" },
        ],
      },
      {
        name: "베스트2",
        product: [
          { name: "상품1" },
          { name: "상품1" },
          { name: "상품3" },
          { name: "상품4" },
        ],
      },
    ],
  },
  {
    name: "신선타임",
    value: "fresh",
    children: [
      { name: "신선타임1", product: [{ name: "상품1" }] },
      { name: "신선타임2", product: [{ name: "상품1" }] },
    ],
  },
  {
    name: "마감할인",
    value: "sales",
    children: [
      { name: "마감할인1", product: [{ name: "상품1" }] },
      { name: "마감할인2", product: [{ name: "상품1" }] },
    ],
  },
  {
    name: "천원샵",
    value: "ten",
    children: [
      { name: "천원샵1", product: [{ name: "상품1" }] },
      { name: "천원샵2", product: [{ name: "상품1" }] },
    ],
  },
  {
    name: "과일채소",
    value: "fruit",
    children: [
      { name: "과일채소1", product: [{ name: "상품1" }] },
      { name: "과일채소2", product: [{ name: "상품1" }] },
    ],
  },
];

export default menus;
