import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import ProjectSection from "./ProjectSection"; // Adjust this path to your component's path
import Image from "next/image";

// Mock the next/image component
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />
}));

// Mock SlideUp component
vi.mock("@/components/SlideUp", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  )
}));

// Mock IntersectionObserver
class MockIntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn();
  root = null;
  rootMargin = "0px";
  thresholds = [0];
}

(window as any).IntersectionObserver = MockIntersectionObserver;

describe("ProjectSection Component", () => {
  it("renders the ProjectSection component", () => {
    render(<ProjectSection />);

    // Check the main heading
    expect(
      screen.getByRole("heading", { name: /Projects/i })
    ).toBeInTheDocument();

    // Check for each project
    expect(screen.getByText("HR Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Sigma")).toBeInTheDocument();
    expect(screen.getByText("Irancell")).toBeInTheDocument();

    // Check for project descriptions
    expect(
      screen.getByText(
        /HR Dashboard is a web application for managing employees like contracts and insurance./i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Sigma is a website that provides services like web design, Enterprise portal, etc\.\.\./i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Irancell is a telecommunication company that provides services such as SIM cards and all types of internet./i
      )
    ).toBeInTheDocument();

    // Check for images
    const hrImage = screen.getByAltText("HR Dashboard");
    expect(hrImage).toHaveAttribute("src", "/hc-dashboard.png");

    const sigmaImage = screen.getByAltText("Sigma");
    expect(sigmaImage).toHaveAttribute("src", "/sigma.png");

    const irancellImage = screen.getByAltText("Irancell");
    expect(irancellImage).toHaveAttribute("src", "/irancell.png");

    // Check for links
    const sigmaLink = screen.getByRole("link", { name: "Sigma" });
    expect(sigmaLink).toHaveAttribute("href", "https://www.sigma.ir/");
  });
});
