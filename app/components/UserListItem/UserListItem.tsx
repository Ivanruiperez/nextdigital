import { UserListItemProps } from "../../types";

export const UserListItem = ({ user }: UserListItemProps) => {
	return (
		<div>
			<p>{`${user.name}`}</p>
			<p>{`${user.username}`}</p>
			<p>{`${user.email}`}</p>
			<p>{`${user.address.city}`}</p>
			<p>{`${user.website}`}</p>
			<p>{`${user.company.name}`}</p>
		</div>
	);
};
