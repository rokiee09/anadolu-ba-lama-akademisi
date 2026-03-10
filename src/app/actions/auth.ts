"use server";

import { revalidatePath } from "next/cache";
import {
  initialAuthActionState,
  type AuthActionState,
} from "@/lib/auth-schema";
import {
  clearDemoUserSession,
  createSupabaseServerClient,
  setDemoUserSession,
} from "@/lib/supabase-server";

function readCredentials(formData: FormData) {
  return {
    email: String(formData.get("email") ?? "").trim(),
    password: String(formData.get("password") ?? ""),
  };
}

function validateCredentials(email: string, password: string) {
  if (!email || !email.includes("@")) {
    return "Gecerli bir e-posta adresi girin.";
  }

  if (!password || password.length < 6) {
    return "Sifre en az 6 karakter olmali.";
  }

  return null;
}

export async function signInAction(
  _prevState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  const { email, password } = readCredentials(formData);
  const validationError = validateCredentials(email, password);

  if (validationError) {
    return { success: false, message: validationError };
  }

  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    await setDemoUserSession(email);
    revalidatePath("/portal");
    revalidatePath("/giris");

    return {
      ...initialAuthActionState,
      success: true,
      message:
        "Demo oturumu acildi. Supabase baglamadan da portal deneyimini test edebilirsiniz.",
    };
  }

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { success: false, message: error.message };
  }

  revalidatePath("/portal");

  return { success: true, message: "Giris basarili. Portale gecebilirsiniz." };
}

export async function signUpAction(
  _prevState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  const { email, password } = readCredentials(formData);
  const validationError = validateCredentials(email, password);

  if (validationError) {
    return { success: false, message: validationError };
  }

  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    await setDemoUserSession(email);
    revalidatePath("/portal");
    revalidatePath("/giris");

    return {
      ...initialAuthActionState,
      success: true,
      message:
        "Demo ogrenci hesabi olusturuldu ve oturum acildi. Supabase baglandiginda ayni akis canliya tasinabilir.",
    };
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        role: "student",
      },
    },
  });

  if (error) {
    return { success: false, message: error.message };
  }

  return {
    success: true,
    message:
      "Kayit olusturuldu. E-posta dogrulama acik ise gelen kutunuzu kontrol edin, degilse dogrudan giris yapabilirsiniz.",
  };
}

export async function signOutAction() {
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    await clearDemoUserSession();
    revalidatePath("/portal");
    revalidatePath("/giris");
    return;
  }

  await supabase.auth.signOut();
  revalidatePath("/portal");
  revalidatePath("/giris");
}
