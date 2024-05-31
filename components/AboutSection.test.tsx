import { Matcher, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, it, expect, vi } from "vitest";
import AboutSection from "./AboutSection";
import Image from "next/image";

// Mock the next/image component
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />
  //   default: (props: any) => <Image alt="" {...props} />
}));
// Define the skills array
const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Vue js" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Bootstrap" },
  { skill: "Wordpress" },
  { skill: "GitHub" },
  { skill: "C#" },
  { skill: ".Net framework" },
  { skill: "Flutter" }
];
describe("AboutSection Component", () => {
  it("renders the AboutSection component", () => {
    render(<AboutSection />);

    // Check if the main heading renders correctly
    expect(
      screen.getByRole("heading", { name: /About Me/i })
    ).toBeInTheDocument();

    // Check if the subtitle renders correctly
    expect(
      screen.getByRole("heading", { name: /Get to know me!/i })
    ).toBeInTheDocument();

    // Check if the skills section renders all skill items
    skills.forEach((skill: { skill: Matcher }) => {
      expect(screen.getByText(skill.skill)).toBeInTheDocument();
    });

    // Check if the image renders with correct attributes
    const image = screen.getByAltText("");
    expect(image).toHaveAttribute("src", "/hero-image.png");
    expect(image).toHaveAttribute("alt", "");
  });
});
