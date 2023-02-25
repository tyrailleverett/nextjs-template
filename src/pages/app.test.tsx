import { render, screen } from "@testing-library/react";
import Home from "./index";

test("home", () => {
  render(<Home />);
  expect(screen.getByText("Hello from NextJS"));
});
