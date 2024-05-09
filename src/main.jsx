import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import { App } from "./App";
const app = document.querySelector("#app");

createRoot(app).render(
	<HashRouter>
		<App />
	</HashRouter>,
);
