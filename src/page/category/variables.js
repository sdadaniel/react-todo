const menus = [
  {
    name: "베스트",
    value: "best",
    children: [
      {
        name: "베스트1",
        product: [
          { name: "삼겹살" },
          { name: "오뚜기밥 작은밥 150g" },
          { name: "CJ 햇반 210g" },
          { name: "찐신선 냉동 삼겹살" },
        ],
      },
      {
        name: "베스트2",
        product: [
          { name: "풀무원 한끼 연두부 110g + 오리엔탈 유자 소스 1개입" },
          { name: "테라오카 계란에 뿌리는 간장소스 150ml" },
          { name: "삼양 달고나 짱구 100g" },
          { name: "삼양 간짬뽕 140g" },
        ],
      },
    ],
  },
  {
    name: "신선타임",
    value: "fresh",
    children: [
      {
        name: "신선타임1",
        product: [{ name: "[마감할인] 국산콩두부 반모(찌개) 200g" }],
      },
      {
        name: "신선타임2",
        product: [{ name: "농심 옥수수깡 하바나옥수수맛 " }],
      },
    ],
  },
  {
    name: "마감할인",
    value: "sales",
    children: [
      { name: "마감할인1", product: [{ name: "농심 짬뽕 건면 103g" }] },
      { name: "마감할인2", product: [{ name: "오리온 왕꿈틀이 80g" }] },
    ],
  },
  {
    name: "천원샵",
    value: "ten",
    children: [
      { name: "천원샵1", product: [{ name: "망고 1입" }] },
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
