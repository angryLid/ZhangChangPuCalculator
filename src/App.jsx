import { Suspense } from "react";
import { useRoutes, useLocation, NavLink } from "react-router-dom";
import routes from "~react-pages";
import "./global.css";
// import "./styles.css"
import CardProvider from "./contexts/CardContext";
export const App = () => {
	const l = useLocation();
	const menu = [
		{ pathname: "/", view: "严教" },
		{ pathname: "/mi-zhu", view: "资援" },
		{ pathname: "/legacy", view: "旧版" },
	];
	console.log(
		"%c [l]:",
		"background:linear-gradient(#69c,#258, #69c);color:#fff;font-size:14px",
		l,
	);
	return (
		<Suspense fallback={<div>loading...</div>}>
			{" "}
			<CardProvider>
				<div>
					{menu.map(({ pathname, view }) => (
						<NavLink
							to={pathname}
							key={pathname}
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active link" : "link"
							}
						>
							{view}
						</NavLink>
					))}
				</div>
				{useRoutes(routes)}
			</CardProvider>
		</Suspense>
	);
};
