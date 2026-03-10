"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm } from "@/app/actions/contact";
import {
  initialContactActionState,
  type ContactActionState,
} from "@/lib/contact-schema";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-full bg-amber-400 px-6 py-3 font-semibold text-stone-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Gonderiliyor..." : "Basvuruyu Gonder"}
    </button>
  );
}

function FieldMessage({
  state,
  name,
}: {
  state: ContactActionState;
  name: keyof NonNullable<ContactActionState["fieldErrors"]>;
}) {
  const error = state.fieldErrors?.[name];

  if (!error) {
    return null;
  }

  return <p className="text-sm text-red-300">{error}</p>;
}

export function ContactForm() {
  const [state, formAction] = useActionState(
    submitContactForm,
    initialContactActionState,
  );

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-stone-200">Ad soyad</span>
          <input
            name="fullName"
            className="w-full rounded-2xl border border-white/10 bg-stone-950/60 px-4 py-3 text-white outline-none ring-0 transition placeholder:text-stone-500 focus:border-amber-300"
            placeholder="Ornek: Ayse Demir"
          />
          <FieldMessage state={state} name="fullName" />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-stone-200">Telefon</span>
          <input
            name="phone"
            className="w-full rounded-2xl border border-white/10 bg-stone-950/60 px-4 py-3 text-white outline-none ring-0 transition placeholder:text-stone-500 focus:border-amber-300"
            placeholder="05xx xxx xx xx"
          />
          <FieldMessage state={state} name="phone" />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-stone-200">E-posta</span>
          <input
            name="email"
            type="email"
            className="w-full rounded-2xl border border-white/10 bg-stone-950/60 px-4 py-3 text-white outline-none ring-0 transition placeholder:text-stone-500 focus:border-amber-300"
            placeholder="ornek@mail.com"
          />
          <FieldMessage state={state} name="email" />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-stone-200">Seviye</span>
          <select
            name="level"
            defaultValue=""
            className="w-full rounded-2xl border border-white/10 bg-stone-950/60 px-4 py-3 text-white outline-none ring-0 transition focus:border-amber-300"
          >
            <option value="" disabled>
              Seviye secin
            </option>
            <option value="Baslangic">Baslangic</option>
            <option value="Orta">Orta</option>
            <option value="Ileri">Ileri</option>
            <option value="Bilmiyorum">Heniz bilmiyorum</option>
          </select>
          <FieldMessage state={state} name="level" />
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-sm font-medium text-stone-200">Ilgi alani</span>
        <select
          name="interest"
          defaultValue=""
          className="w-full rounded-2xl border border-white/10 bg-stone-950/60 px-4 py-3 text-white outline-none ring-0 transition focus:border-amber-300"
        >
          <option value="" disabled>
            Secin
          </option>
          <option value="Yuz yuze kurs">Yuz yuze kurs</option>
          <option value="Online ders">Online ders</option>
          <option value="Cocuk programi">Cocuk programi</option>
          <option value="Birebir ders">Birebir ders</option>
        </select>
        <FieldMessage state={state} name="interest" />
      </label>

      <label className="space-y-2">
        <span className="text-sm font-medium text-stone-200">Mesaj</span>
        <textarea
          name="message"
          rows={5}
          className="w-full rounded-3xl border border-white/10 bg-stone-950/60 px-4 py-3 text-white outline-none ring-0 transition placeholder:text-stone-500 focus:border-amber-300"
          placeholder="Ne seviyedesiniz, nasil bir ders dusunuyorsunuz, bize kisaca yazin."
        />
        <FieldMessage state={state} name="message" />
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

      <SubmitButton />
    </form>
  );
}
