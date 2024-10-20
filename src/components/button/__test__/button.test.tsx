import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import TradableButton from "../button";

describe("Button component", () => {
  it("Button should render correctly", () => {
    render(<TradableButton text="working"/>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});