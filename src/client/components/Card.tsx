import { FC, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Card: FC = () => {
	return (
		<div>
			<h1>Card</h1>
			<nav>
				<ul>
					<li>
						<Link to={"view"}>View</Link>
					</li>
					<li>
						<Link to={"sign"}>Sign</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</div>
	);
};

export { Card };
