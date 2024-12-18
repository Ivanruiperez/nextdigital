import { LoaderFunction } from "@remix-run/node";

import { baseUrl } from "../constants";

export const loader: LoaderFunction = async () => {
	try {
		const users = await fetch(`${baseUrl}`).then((res) => res.json());
		console.log(users);
		return users;
	} catch (error) {
		console.error("Error fetching users:", error);
		return [];
	}
};
