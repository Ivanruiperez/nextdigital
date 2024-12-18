import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFoundPage from "../routes/404";

test("renders the NotFoundPage component", () => {
	render(
		<MemoryRouter
			future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
		>
			<NotFoundPage />
		</MemoryRouter>
	);

	const heading = screen.getByText(/Page not found/i);
	expect(heading).toBeInTheDocument();
});
