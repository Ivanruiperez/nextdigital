import { baseUrl } from "./constants";

export const fetchUsers = async () => {
	const response = await fetch(`${baseUrl}`).then((res) => res.json());
	return response;
};
