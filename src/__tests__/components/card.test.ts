import { render, screen } from "@testing-library/react";
import { Card } from "../../components/Card";
import { iProduct } from "../../contexts/products/types";

describe("Card component", () => {
  it("Should be able to render a Card", () => {
    const mockProduct: iProduct = {
      id: 6,
      name: "iPad",
      brand: "Apple",
      description:
        "iPad é uma linha de tablets projetada, desenvolvida e comercializada pela Apple, que funciona com o sistema operacional móvel iOS e iPadOS.",
      photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/ipadair.webp",
      price: "4200.00",
      createdAt: new Date("2023-01-23T18:17:04.771Z"),
      updatedAt: new Date("2023-01-23T18:17:04.771Z"),
    };
    render(Card({ product: mockProduct }));
    console.log(screen.getByText(mockProduct.name));
    expect(screen.getByText(mockProduct.name)).toHaveTextContent(mockProduct.name);
  });
});
