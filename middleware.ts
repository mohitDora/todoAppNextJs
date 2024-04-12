import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes:[
    "/",
    "/api/webhook/clerk",

  ],
  ignoredRoutes: ["/api/webhook/clerk","/favicon.ico"]
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};