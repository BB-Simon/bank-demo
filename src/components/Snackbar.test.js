import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store } from "../store";
import Snackbar from "./Snackbar";

afterEach(cleanup);

it("once clike on open success button, it will open success modal", () => {
  render(
    <Provider store={store}>
      <Snackbar />
    </Provider>
  );

  userEvent.click(
    screen.getByRole("button", { name: /Open Snack bar on success/i })
  );
  expect(screen.getByTestId("msg")).toBeInTheDocument();
  expect(screen.getByTestId("msg")).toHaveClass("success");
});

it("once clike on open error button, it will open error modal", () => {
  render(
    <Provider store={store}>
      <Snackbar />
    </Provider>
  );

  userEvent.click(
    screen.getByRole("button", { name: /Open Snack bar on error/i })
  );
  expect(screen.getByTestId("msg")).toBeInTheDocument();
  expect(screen.getByTestId("msg")).toHaveClass("error");
});

it("once clike on close button, it will close modal", () => {
  render(
    <Provider store={store}>
      <Snackbar />
    </Provider>
  );

  userEvent.click(screen.getByRole("button", { name: /Close Snack bar/i }));
  expect(screen.getByTestId("row")).not.toContainHTML(
    // eslint-disable-next-line no-template-curly-in-string
    '<div data-testid="msg" className={`box ${severity === "success" ? "success" : "error"}`}><h1>{message}</h1></div>'
  );
});
