"use client";

import Link from "next/link";
import { useActionState, type ReactNode } from "react";
import { useFormStatus } from "react-dom";
import { signInAction, signUpAction } from "@/app/actions/auth";
import {
  initialAuthActionState,
  type AuthActionState,
} from "@/lib/auth-schema";

function AuthSubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-full bg-amber-400 px-5 py-3 font-semibold text-stone-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Bekleyin..." : label}
    </button>
  );
}

function AuthCard({
  title,
  description,
  submitLabel,
  action,
  footer,
}: {
  title: string;
  description: string;
  submitLabel: string;
  action: typeof signInAction | typeof signUpAction;
  footer: ReactNode;
}) {
  const [state, formAction] = useActionState<AuthActionState, FormData>(
    action,
    initialAuthActionState,
  );

  return (
    <div className="card-surface p-8">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <p className="mt-4 leading-7 text-stone-300">{description}</p>

      <form action={formAction} className="mt-8 space-y-4">
        <label className="block space-y-2">
          <span className="text-sm font-medium text-stone-200">E-posta</span>
          <input
            type="email"
            name="email"
            className="w-full rounded-2xl border border-white/10 bg-stone-950/60 px-4 py-3 text-white outline-none transition placeholder:text-stone-500 focus:border-amber-300"
            placeholder="ornek@mail.com"
          />
        </label>

        <label className="block space-y-2">
          <span className="text-sm font-medium text-stone-200">Sifre</span>
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

        <AuthSubmitButton label={submitLabel} />
      </form>

      <div className="mt-6 text-sm text-stone-400">{footer}</div>
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
        action={signInAction}
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
        action={signUpAction}
        footer={
          <>
            Kayit sonrasi dogrulama gerekirse Supabase e-posta ayarlari kullanilir.
          </>
        }
      />
    </div>
  );
}
