import { UserListItemProps } from "../../types";

export const UserListItem = ({ user }: UserListItemProps) => {
	return (
		<div>
			<h2>{`${user.name}`}</h2>
		</div>
	);
};
