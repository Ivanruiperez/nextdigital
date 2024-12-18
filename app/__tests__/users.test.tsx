import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Users from "../routes/users._index";

const mockUsers = [
	{
		id: 1,
		name: "John Doe",
		username: "johndoe",
		email: "john.doe@example.com",
		address: { city: "New York" },
		website: "johndoe.com",
		company: { name: "Doe Inc." },
	},
];

const mockQueryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
		},
	},
});

jest.mock("@tanstack/react-query", () => {
	const actual = jest.requireActual("@tanstack/react-query");
	return {
		...actual,
		useQuery: jest.fn(() => ({
			data: mockUsers,
			isLoading: false,
			error: null,
		})),
	};
});

test("renders a list of users", () => {
	render(
		<QueryClientProvider client={mockQueryClient}>
			<Users />
		</QueryClientProvider>
	);

	expect(screen.getByText("John Doe")).toBeInTheDocument();
	expect(screen.getByText("johndoe")).toBeInTheDocument();
	expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
	expect(screen.getByText("New York")).toBeInTheDocument();
	expect(screen.getByText("Doe Inc.")).toBeInTheDocument();
});
