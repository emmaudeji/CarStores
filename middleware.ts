export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/profile", "/dealer/register", "/dealer", ],
  // matcher: ["/|/((?!register|api|login).*)"], 
};