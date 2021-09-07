import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import BankDemo from "./BankDemo";
import { Provider } from "react-redux";
import { store } from "../store";

afterEach(cleanup);

it("on initial render the amount will be 100", () => {
  render(
    <Provider store={store}>
      <BankDemo />
    </Provider>
  );
  //   expect(await screen.findByText(/amount: 100/i)).toHaveTextContent(
  //     /amount: 100/i
  //   );
  //   expect(screen.getByText(/100/i)).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /100/i })).toBeInTheDocument();
});

it("once clike on deposit button, the amount iwll be 1100", () => {
  render(
    <Provider store={store}>
      <BankDemo />
    </Provider>
  );

  userEvent.click(screen.getByRole("button", { name: "Deposit" }));
  expect(screen.getByRole("heading", { name: /1100/i })).toBeInTheDocument();
});

it("once clike on withdrw button, the amount iwll be 600", () => {
  render(
    <Provider store={store}>
      <BankDemo />
    </Provider>
  );

  userEvent.click(screen.getByRole("button", { name: "Withdraw" }));
  expect(screen.getByText(/600/i)).toBeInTheDocument();
});

it("once clike on Bankrupt button, the amount iwll be 0", () => {
  render(
    <Provider store={store}>
      <BankDemo />
    </Provider>
  );

  userEvent.click(screen.getByRole("button", { name: "Bankrupt" }));
  expect(screen.getByText(/0/i)).toBeInTheDocument();
});
