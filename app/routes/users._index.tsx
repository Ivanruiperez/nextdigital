/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { strings } from "../constants";
import { fetchUsers } from "../utils";
import { User } from "../types";
import { UserListItem } from "../components/UserListItem/UserListItem";

export default function Users() {
	const [usersList, setUsersList] = useState<User[]>();
	const { isLoading, error, data } = useQuery({
		queryKey: ["users"],
		queryFn: () => fetchUsers(),
	});
	useEffect(() => {
		if (data) {
			setUsersList(data);
		}
	}, [data]);
	if (error) return `${strings.anErrorHasOccurred} ${error?.message}`;
	if (!data) {
		return null;
	}
	if (isLoading) {
		return <p>is loading...</p>;
	}
	return (
		<main className="flex flex-col items-center justify-center">
			<h1 className="mt-5">{strings.users}</h1>
			<div className="text-center mt-8">
				{!usersList?.length ? (
					<div className="justify-center flex">
						<p>{strings.noUsersFound}</p>
					</div>
				) : (
					<ul className="flex flex-col justify-center items-center min-w-full">
						{usersList.map((user: User) => {
							return (
								<li
									key={user.id}
									onClick={() => {}}
									className="cursor-pointer w-1/2 m-2"
								>
									<UserListItem user={user} />
								</li>
							);
						})}
					</ul>
				)}
			</div>
		</main>
	);
}
