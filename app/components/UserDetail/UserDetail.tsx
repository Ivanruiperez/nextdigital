import { useNavigate } from "@remix-run/react";

import { UserListItemProps } from "../../types";

export const UserDetail = ({ user }: UserListItemProps) => {
	const navigate = useNavigate();
	return (
		<div className="rounded-lg bg-gray-c60 p-4 my-4 flex flex-col items-center w-1/2 relative">
			<div className="absolute left-5 top-5">
				<button onClick={() => navigate(`/`)}>
					<p>Back</p>
				</button>
			</div>
			<div className="ml-5">
				<h1 className="mb-5 text-2xl">{user.name}</h1>
			</div>
			<div>
				<p>{`${user.username}`}</p>
				<p>{`${user.email}`}</p>
				<p>{`${user.address.city}`}</p>
				<p>{`${user.website}`}</p>
				<p>{`${user.company.name}`}</p>
			</div>
		</div>
	);
};
