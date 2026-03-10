"use client";

import { useState, type FormEvent } from "react";
import { saveBrowserDemoLead } from "@/lib/browser-demo";
import { contactFormSchema } from "@/lib/contact-schema";
import {
  initialContactActionState,
  type ContactActionState,
} from "@/lib/contact-schema";

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
  const [state, setState] = useState<ContactActionState>(initialContactActionState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const parsed = contactFormSchema.safeParse({
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      level: formData.get("level"),
      interest: formData.get("interest"),
      message: formData.get("message"),
    });

    if (!parsed.success) {
      const flattened = parsed.error.flatten().fieldErrors;
      setState({
        success: false,
        message: "Formu gondermeden once eksik alanlari duzeltin.",
        fieldErrors: {
          fullName: flattened.fullName?.[0],
          phone: flattened.phone?.[0],
          email: flattened.email?.[0],
          level: flattened.level?.[0],
          interest: flattened.interest?.[0],
          message: flattened.message?.[0],
        },
      });
      setIsSubmitting(false);
      return;
    }

    saveBrowserDemoLead({
      full_name: parsed.data.fullName,
      phone: parsed.data.phone,
      email: parsed.data.email,
      level: parsed.data.level,
      interest: parsed.data.interest,
      message: parsed.data.message,
    });

    setState({
      success: true,
      message:
        "Basvurunuz demo modunda bu tarayicida kaydedildi. GitHub Pages uzerinde de ayni sekilde calisir.",
    });
    event.currentTarget.reset();
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-[#5D4538]">Ad soyad</span>
          <input
            name="fullName"
            className="w-full rounded-2xl border border-white/10 bg-stone-950/60 px-4 py-3 text-white outline-none ring-0 transition placeholder:text-stone-500 focus:border-amber-300"
            placeholder="Ornek: Ayse Demir"
          />
          <FieldMessage state={state} name="fullName" />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-[#5D4538]">Telefon</span>
          <input
            name="phone"
            className="w-full rounded-2xl border border-white/10 bg-stone-950/60 px-4 py-3 text-white outline-none ring-0 transition placeholder:text-stone-500 focus:border-amber-300"
            placeholder="05xx xxx xx xx"
          />
          <FieldMessage state={state} name="phone" />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-[#5D4538]">E-posta</span>
          <input
            name="email"
            type="email"
            className="w-full rounded-2xl border border-white/10 bg-stone-950/60 px-4 py-3 text-white outline-none ring-0 transition placeholder:text-stone-500 focus:border-amber-300"
            placeholder="ornek@mail.com"
          />
          <FieldMessage state={state} name="email" />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-[#5D4538]">Seviye</span>
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
        <span className="text-sm font-medium text-[#5D4538]">Ilgi alani</span>
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
        <span className="text-sm font-medium text-[#5D4538]">Mesaj</span>
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

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-amber-400 px-6 py-3 font-semibold text-stone-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Gonderiliyor..." : "Basvuruyu Gonder"}
      </button>
    </form>
  );
}
