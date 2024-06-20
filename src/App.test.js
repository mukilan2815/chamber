import React from "react";
import { render, screen } from "@testing-library/react";
import Membershipform from "./Pages/Client/Membershipform";

describe("Membershipform", () => {
  test("renders Membershipform component without crashing", () => {
    render(<Membershipform />);
  });

  test("contains date input", () => {
    render(<Membershipform />);
    const dateInput = screen.getByPlaceholderText("Date");
    expect(dateInput).toBeInTheDocument();
  });
  test("renders Home page", () => {
    render(<App />);
  });
  test("contains name input", () => {
    render(<Membershipform />);
    const nameInput = screen.getByPlaceholderText("Name");
    expect(nameInput).toBeInTheDocument();
  });

  test("contains year input", () => {
    render(<Membershipform />);
    const yearInput = screen.getByPlaceholderText("Year");
    expect(yearInput).toBeInTheDocument();
  });

  test("contains checkboxes for each label", () => {
    render(<Membershipform />);
    const labels = [
      "Proprietary Firm",
      "Partnership Firm LLP",
      "Private Limited",
      "Public Limited Unlisted",
      "Public Limited Listed",
      "Trust",
      "Society",
      "Associations",
    ];
    labels.forEach((label) => {
      const checkbox = screen.getByLabelText(label);
      expect(checkbox).toBeInTheDocument();
    });
  });
});
