// middleware.js
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export function middleware(req) {
  const res = NextResponse.next();
  const visitorId = req.cookies.get("visitorId")?.value;

  if (!visitorId) {
    res.cookies.set("visitorId", uuidv4(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      sameSite: "lax",
    });
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
