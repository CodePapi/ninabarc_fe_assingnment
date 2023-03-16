import ErrorOccurred from "./ErrorOccured";
import { render, screen } from "@testing-library/react";

test("renders ErrorOccurred", () => {
    render(<ErrorOccurred />);
    expect(
        screen.getByText(
            /An error while searching for books, please try again later/i
        )
    ).toBeInTheDocument();
});