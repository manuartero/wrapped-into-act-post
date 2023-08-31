import { render, screen, fireEvent } from "@testing-library/react";
import { MyComponent } from "./my-component";

describe("<MyComponent />", () => {
  test('renders a button with the text "count is 0"', () => {
    render(<MyComponent />);
    const button = screen.getByRole("button");
    expect(button.textContent).toBe("count is 0");
  });

  test("clicking the button increments the count", () => {
    render(<MyComponent />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(button.textContent).toBe("count is 1");
  });

});
