import * as React from "react";
import * as ReactDOM from "react-dom/client";
import * as ReactRouterDOM from "react-router-dom";
import { New } from "./components/New.js";
import { Card } from "./components/Card.js";
import { View } from "./components/View.js";
import { Sign } from "./components/Sign.js";

const rootElement = document.getElementById("root") as HTMLDivElement;
const root = ReactDOM.createRoot(rootElement);
const router = ReactRouterDOM.createBrowserRouter([
	{
		element: <New />,
		path: "/"
	},
	{
		element: <Card />,
		path: "cards/:cardId",
		children: [
			{
				element: <View />,
				index: true
			},
			{
				element: <Sign />,
				path: "sign"
			}
		]
	}
]);

root.render(
	<React.StrictMode>
		<ReactRouterDOM.RouterProvider router={router} />
	</React.StrictMode>
);
