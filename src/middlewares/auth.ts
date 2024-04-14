import { Elysia } from "elysia";
import { prisma } from "~libs/prisma";

export const isAuthenticated = (app: Elysia) =>
	// @ts-ignore
	app.derive(async ({ cookie: { auth }, jwt, set }) => {
		const token = auth?.value;

		if (token) {
			set.status = 401;
			return { message: "Unauthorized" };
		}
		const { userId } = await jwt.verify(token);
		if (!userId) {
			set.status = 401;
			return { message: "Unauthorized" };
		}

		const user = await prisma.user.findUnique({
			where: { id: userId },
		});
		if (!user) {
			set.status = 401;
			return { message: "Unauthorized" };
		}
		return { user };
	});
