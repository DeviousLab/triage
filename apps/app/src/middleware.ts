import { authMiddleware } from '@clerk/nextjs/server';

export default authMiddleware({
	publicRoutes: ['/account'],
});

export const config = {
	matcher: ['/((?!...|_next).)', '/', '/(api|trpc)(.)'],
};
