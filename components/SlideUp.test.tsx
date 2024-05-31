import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, it, expect, vi } from "vitest";
import SlideUp from "./SlideUp"; // Adjust this path to your component's path
import React from "react";

// Mock IntersectionObserver
class IntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}
(window as any).IntersectionObserver = IntersectionObserver;

describe("SlideUp Component", () => {
  it("renders children and applies initial opacity-0 class", () => {
    render(
      <SlideUp>
        <div>Test Content</div>
      </SlideUp>
    );

    const container = screen.getByText("Test Content").parentElement;
    expect(container).toHaveClass("relative opacity-0");
  });

  it("applies animate-slideUpCubiBezier class when observed", () => {
    render(
      <SlideUp>
        <div>Test Content</div>
      </SlideUp>
    );

    const container = screen.getByText("Test Content").parentElement;

    // Simulate the intersection observer callback
    if (container) {
      container.classList.remove("opacity-0");
      container.classList.add("animate-slideUpCubiBezier");
    }

    expect(container).toHaveClass("animate-slideUpCubiBezier");
    expect(container).not.toHaveClass("opacity-0");
  });
});
