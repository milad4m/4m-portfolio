import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, it, expect, vi } from "vitest";
import HeroSection from ".//HeroSection"; // adjust this path to your component's path
import Image from "next/image";

// Mock next/image component
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />
}));

describe("HeroSection Component", () => {
  it("renders the HeroSection component", () => {
    render(<HeroSection />);

    // Check if the main heading renders correctly
    expect(
      screen.getByRole("heading", { level: 1, name: /Hi, I'm Milad!/i })
    ).toBeInTheDocument();

    // Check if the paragraph text renders correctly
    expect(
      screen.getByText(/Let's build something amazing together!/i)
    ).toBeInTheDocument();

    // Check if the image renders correctly
    const image = screen.getByAltText("");
    expect(image).toHaveAttribute("src", "/headshot.png");
    expect(image).toHaveAttribute("alt", "");

    // Check if the "Projects" link button renders correctly
    const projectsLink = screen.getByText("Projects");
    expect(projectsLink).toBeInTheDocument();
    //expect(projectsLink).toHaveAttribute("to", "#projects");
  });
});
