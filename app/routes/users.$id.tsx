import { useEffect } from "react";
import { useNavigate, useParams } from "@remix-run/react";
import { useQuery } from "@tanstack/react-query";

import { baseUrl, strings } from "../constants";
import { UserDetail } from "../components/UserDetail/UserDetail";

export default function UsersId() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { isLoading, error, data } = useQuery({
		queryKey: ["userDetail"],
		queryFn: () =>
			fetch(`${baseUrl}/${id}`).then((res) => {
				if (!res.ok) {
					throw new Error(strings.noUsersFound);
				}
				return res.json();
			}),
	});
	useEffect(() => {
		if (!isLoading && (error || !data?.name)) {
			navigate("/404", { replace: true });
		}
	}, [error, isLoading, data, navigate]);
	if (isLoading) return <p>{strings.isLoading}</p>;
	if (!id) {
		return null;
	}
	return (
		data && (
			<div className="flex justify-center mt-5">
				<UserDetail user={data} />
			</div>
		)
	);
}
