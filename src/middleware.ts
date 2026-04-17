import { NextRequest, NextResponse } from "next/server";

// Simple sliding window rate limiter for API routes
// Uses a global Map (persists within a single serverless instance lifecycle)
// Combined with Vercel's built-in DDoS protection for defense-in-depth
const rateStore = new Map<string, { count: number; resetAt: number }>();
const MAX_REQUESTS = 3;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

export function middleware(req: NextRequest) {
  // Only rate-limit the contact API
  if (req.nextUrl.pathname !== "/api/contact") {
    return NextResponse.next();
  }

  if (req.method !== "POST") {
    return NextResponse.next();
  }

  const ip =
    req.headers.get("x-real-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";

  const now = Date.now();
  const entry = rateStore.get(ip);

  if (entry && now < entry.resetAt) {
    if (entry.count >= MAX_REQUESTS) {
      const retryAfter = Math.ceil((entry.resetAt - now) / 1000);
      return NextResponse.json(
        { error: "Trop de demandes. Réessayez dans quelques minutes." },
        {
          status: 429,
          headers: {
            "Retry-After": String(retryAfter),
            "X-RateLimit-Limit": String(MAX_REQUESTS),
            "X-RateLimit-Remaining": "0",
          },
        }
      );
    }
    entry.count++;
  } else {
    rateStore.set(ip, { count: 1, resetAt: now + WINDOW_MS });
  }

  // Cleanup old entries periodically (prevent memory leak)
  if (rateStore.size > 1000) {
    for (const [key, val] of rateStore) {
      if (now > val.resetAt) rateStore.delete(key);
    }
  }

  const current = rateStore.get(ip)!;
  const response = NextResponse.next();
  response.headers.set("X-RateLimit-Limit", String(MAX_REQUESTS));
  response.headers.set("X-RateLimit-Remaining", String(MAX_REQUESTS - current.count));
  return response;
}

export const config = {
  matcher: "/api/:path*",
};
