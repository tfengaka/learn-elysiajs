import jwt from "@elysiajs/jwt";
import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";

import { auth } from "~modules/auth";

const PORT = Bun.env.PORT || 8000;

const server = new Elysia();
server.use(swagger());
server.use(cors());
server.group("/api", (app) =>
	app.use(jwt({ name: "jwt", secret: Bun.env.JWT_SECRET! })).use(auth)
);

server.listen(PORT, () => {
	console.log(`🦊  Server is running at ${server.server?.url}`);
});
