"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent, type ReactNode } from "react";
import { setBrowserDemoSession } from "@/lib/browser-demo";
import {
  initialAuthActionState,
  type AuthActionState,
} from "@/lib/auth-schema";

function AuthCard({
  title,
  description,
  submitLabel,
  mode,
  footer,
}: {
  title: string;
  description: string;
  submitLabel: string;
  mode: "signin" | "signup";
  footer: ReactNode;
}) {
  const router = useRouter();
  const [state, setState] = useState<AuthActionState>(initialAuthActionState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    if (!email || !email.includes("@")) {
      setState({ success: false, message: "Gecerli bir e-posta adresi girin." });
      setIsSubmitting(false);
      return;
    }

    if (!password || password.length < 6) {
      setState({ success: false, message: "Sifre en az 6 karakter olmali." });
      setIsSubmitting(false);
      return;
    }

    setBrowserDemoSession(email);
    setState({
      success: true,
      message:
        mode === "signin"
          ? "Demo girisi basarili. Portale yonlendiriliyorsunuz."
          : "Demo hesap olusturuldu. Portale yonlendiriliyorsunuz.",
    });

    window.setTimeout(() => {
      router.push("/portal");
      router.refresh();
    }, 400);
  };

  return (
    <div className="card-surface p-8">
      <h2 className="text-2xl font-semibold text-[#2B1B12]">{title}</h2>
      <p className="mt-4 leading-7 text-[#6B584D]">{description}</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <label className="block space-y-2">
          <span className="text-sm font-medium text-[#5D4538]">E-posta</span>
          <input
            type="email"
            name="email"
            className="w-full rounded-2xl border border-white/10 bg-stone-950/60 px-4 py-3 text-white outline-none transition placeholder:text-stone-500 focus:border-amber-300"
            placeholder="ornek@mail.com"
          />
        </label>

        <label className="block space-y-2">
          <span className="text-sm font-medium text-[#5D4538]">Sifre</span>
          <input
            type="password"
            name="password"
            className="w-full rounded-2xl border border-white/10 bg-stone-950/60 px-4 py-3 text-white outline-none transition placeholder:text-stone-500 focus:border-amber-300"
            placeholder="En az 6 karakter"
          />
        </label>

        {state.message ? (
          <p
            className={`rounded-2xl border px-4 py-3 text-sm ${
              state.success
                ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                : "border-amber-400/20 bg-amber-400/10 text-amber-100"
            }`}
          >
            {state.message}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full bg-amber-400 px-5 py-3 font-semibold text-stone-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Bekleyin..." : submitLabel}
        </button>
      </form>

      <div className="mt-6 text-sm text-[#7A665A]">{footer}</div>
    </div>
  );
}

export function AuthForms() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <AuthCard
        title="Ogrenci girisi"
        description="Mevcut hesabinizla portale girerek video derslere, PDF notlara ve odev alanina ulasin."
        submitLabel="Giris Yap"
        mode="signin"
        footer={
          <>
            Kaydiniz yoksa sagdaki formu kullanin veya{" "}
            <Link href="/iletisim" className="text-amber-300 hover:text-amber-200">
              deneme dersi
            </Link>{" "}
            talep edin.
          </>
        }
      />

      <AuthCard
        title="Yeni hesap olustur"
        description="Yeni ogrenciler icin portal hesabi acin. Sonrasinda ders moduleri ve icerikler hesapla eslestirilebilir."
        submitLabel="Kayit Ol"
        mode="signup"
        footer={
          <>
            Bu kurulum GitHub Pages uyumlu demo modla tarayici icinde calisir.
          </>
        }
      />
    </div>
  );
}
