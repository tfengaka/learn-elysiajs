import { Elysia } from "elysia";
const PORT = Bun.env.PORT || 8000;

const app = new Elysia();
app.get("/", () => "Hello, Elysia!");
app.listen(PORT, () => {
	console.log(`🦊 Elysia is running at ${app.server?.url}`);
});
