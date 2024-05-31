import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import { ThemeProvider } from "next-themes";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  const MockThemeProvider = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider attribute="class">{children}</ThemeProvider>
  );

  it("renders the Navbar", () => {
    render(<Navbar />, { wrapper: MockThemeProvider });
    expect(screen.getByText("Milad Shaterhoseini")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("toggles the menu when button is clicked", () => {
    render(<Navbar />, { wrapper: MockThemeProvider });
    const button = screen.getByRole("button", { name: /menu/i });
    fireEvent.click(button); // Open
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    fireEvent.click(button); // Close
    expect(screen.getByText("Home")).toBeInTheDocument(); // Home should still be in the document
  });

  it("changes theme when theme button is clicked", () => {
    render(<Navbar />, { wrapper: MockThemeProvider });

    const themeButton = screen.getByRole("button", { name: /theme/i });
    fireEvent.click(themeButton); // Change theme
    expect(screen.getByRole("button", { name: /theme/i })).toBeInTheDocument();

    fireEvent.click(themeButton); // Change theme back
    expect(screen.getByRole("button", { name: /theme/i })).toBeInTheDocument();
  });
});
