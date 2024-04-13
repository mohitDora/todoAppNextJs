import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes:[
    "/",
    "/api/webhooks/clerk",

  ],
  ignoredRoutes: ["/api/webhooks/clerk","/favicon.ico"]
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};