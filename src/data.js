export const bookData = [
  {
    id: "1",
    image: "/images/Store/Book.png",
    name: "Atomic One’s",
    price: 23.89,
    description:
      "Many variations of passages of Lorem Ipsum willing araise alteration in some form.",
    detailedDescription:
      "Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum.",
    publisher: "Learning Private Limited (1 January 2021)",
    language: "English",
    paperback: 212,
    isbn: 9788120345799,
    dimension: "20 x 14 x 4 cm",
  },
  {
    id: "2",
    image: "/images/Store/Book.png",
    name: "Atomic One’s",
    price: 23.89,
    description:
      "Many variations of passages of Lorem Ipsum willing araise alteration in some form.",
    detailedDescription:
      "Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum.",
    publisher: "Learning Private Limited (1 January 2021)",
    language: "English",
    paperback: 212,
    isbn: 9788120345799,
    dimension: "20 x 14 x 4 cm",
  },
  {
    id: "3",
    image: "/images/Store/Book.png",
    name: "Atomic One’s",
    price: 23.89,
    description:
      "Many variations of passages of Lorem Ipsum willing araise alteration in some form.",
    detailedDescription:
      "Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum.",
    publisher: "Learning Private Limited (1 January 2021)",
    language: "English",
    paperback: 212,
    isbn: 9788120345799,
    dimension: "20 x 14 x 4 cm",
  },
  {
    id: "4",
    image: "/images/Store/Book.png",
    name: "Atomic One’s",
    price: 23.89,
    description:
      "Many variations of passages of Lorem Ipsum willing araise alteration in some form.",
    detailedDescription:
      "Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum.",
    publisher: "Learning Private Limited (1 January 2021)",
    language: "English",
    paperback: 212,
    isbn: 9788120345799,
    dimension: "20 x 14 x 4 cm",
  },
  {
    id: "5",
    image: "/images/Store/Book.png",
    name: "Atomic One’s",
    price: 23.89,
    description:
      "Many variations of passages of Lorem Ipsum willing araise alteration in some form.",
    detailedDescription:
      "Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum.",
    publisher: "Learning Private Limited (1 January 2021)",
    language: "English",
    paperback: 212,
    isbn: 9788120345799,
    dimension: "20 x 14 x 4 cm",
  },
  {
    id: "6",
    image: "/images/Store/Book.png",
    name: "Atomic One’s",
    price: 23.89,
    description:
      "Many variations of passages of Lorem Ipsum willing araise alteration in some form.",
    detailedDescription:
      "Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum.",
    publisher: "Learning Private Limited (1 January 2021)",
    language: "English",
    paperback: 212,
    isbn: 9788120345799,
    dimension: "20 x 14 x 4 cm",
  },
];

export const findData = (id) => {
  return bookData.filter((item) => item.id === id)[0];
};
