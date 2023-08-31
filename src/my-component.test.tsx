import { render, screen, fireEvent } from "@testing-library/react";
import { MyComponent } from "./my-component";

describe("<MyComponent />", () => {
  test('renders a button with the text "count is .."', () => {
    render(<MyComponent />);
    const button = screen.getByRole("button", { name: "increment" });
    expect(button.textContent).toBe("count is ..");
  });

  test.skip("clicking the button increments the count", () => {
    render(<MyComponent />);
    const button = screen.getByRole("button", { name: "increment" });
    fireEvent.click(button);
    expect(button.textContent).toBe("count is 1");
  });
});
