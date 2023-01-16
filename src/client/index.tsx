import "bulma/css/bulma.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import * as ReactRouterDOM from "react-router-dom";
import { New } from "./components/New.js";
import { Container } from "./components/Container.js";
import { View } from "./components/View.js";
import { Sign } from "./components/Sign.js";

const rootElement = document.body;
const root = ReactDOM.createRoot(rootElement);
const router = ReactRouterDOM.createBrowserRouter([
	{
		element: <Container />,
		path: "/",
		children: [
			{
				element: <New />,
				index: true
			},
			{
				element: <View />,
				path: "cards/:cardId"
			},
			{
				element: <Sign />,
				path: "cards/:cardId/sign"
			}
		]
	}
]);

root.render(
	<React.StrictMode>
		<ReactRouterDOM.RouterProvider router={router} />
	</React.StrictMode>
);
