import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

test("home", () => {
  render(<Home />);
  expect(screen.getByText("Hello, Next.js!!"));
});
