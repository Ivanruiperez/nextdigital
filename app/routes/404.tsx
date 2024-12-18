import { Link } from "@remix-run/react";
import { strings } from "../constants";

export default function NotFoundPage() {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<div className="w-2/3 flex flex-col items-center justify-start">
				<h1 className="text-4xl font-bold">{strings.pageNotFound}</h1>
				<div className="bg-blue-400 rounded-lg w-40 h-12 justify-center items-center flex mt-5">
					<Link to="/">{strings.GoBackToHome}</Link>
				</div>
			</div>
		</div>
	);
}
