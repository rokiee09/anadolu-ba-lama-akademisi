import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { getSupabaseEnv } from "@/lib/supabase-config";

const demoSessionCookieName = "aba_demo_session";

export async function createSupabaseServerClient() {
  const { url, anonKey, authConfigured } = getSupabaseEnv();

  if (!authConfigured || !url || !anonKey) {
    return null;
  }

  const cookieStore = await cookies();

  return createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // Server Components can ignore cookie writes; middleware or actions handle refresh.
        }
      },
    },
  });
}

export type AppUser = {
  email: string;
  source: "supabase" | "demo";
};

export async function setDemoUserSession(email: string) {
  const cookieStore = await cookies();
  cookieStore.set(demoSessionCookieName, email, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearDemoUserSession() {
  const cookieStore = await cookies();
  cookieStore.delete(demoSessionCookieName);
}

export async function getCurrentUser() {
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    const cookieStore = await cookies();
    const demoEmail = cookieStore.get(demoSessionCookieName)?.value;

    if (!demoEmail) {
      return null;
    }

    return {
      email: demoEmail,
      source: "demo",
    } satisfies AppUser;
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.email) {
    return null;
  }

  return {
    email: user.email,
    source: "supabase",
  } satisfies AppUser;
}
