import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const createRedirect = (request: NextRequest) => (path: string) => {
  if (request.url.includes(path)) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL(path, request.url));
};
