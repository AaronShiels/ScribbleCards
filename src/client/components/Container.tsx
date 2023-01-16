import { FC, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Container: FC = () => {
	return (
		<section className="container">
			<Outlet />
		</section>
	);
};

export { Container };
