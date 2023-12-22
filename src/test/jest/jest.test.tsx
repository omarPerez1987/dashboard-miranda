import "@testing-library/jest-dom";
import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ButtonVariantStyled } from "../../componentsStyle/general/ButtonStyled";

describe("ButtonVariantStyled Component", () => {
  it('presenta ButtonVariantStyled con el color correcto para el status "true"', () => {
    const props = {
      status: "true",
    };

    render(
      <ButtonVariantStyled data-testid="button-archived" {...props}>
        ARCHIVED
      </ButtonVariantStyled>
    );

    const button = screen.getByTestId("button-archived");
    expect(button).toHaveStyle(`
    background-color: #e23428;
    `);
  });
});
