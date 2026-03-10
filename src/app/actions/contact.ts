"use server";

import {
  contactFormSchema,
  initialContactActionState,
  type ContactActionState,
} from "@/lib/contact-schema";
import { insertLead } from "@/lib/supabase";

export async function submitContactForm(
  _prevState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
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

    return {
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
    };
  }

  const result = await insertLead({
    full_name: parsed.data.fullName,
    phone: parsed.data.phone,
    email: parsed.data.email,
    level: parsed.data.level,
    interest: parsed.data.interest,
    message: parsed.data.message,
  });

  if (!result.ok) {
    return {
      ...initialContactActionState,
      message: result.reason,
    };
  }

  return {
    success: true,
    message:
      result.storage === "supabase"
        ? "Basvurunuz alindi. En kisa surede sizinle iletisime gececegiz."
        : "Basvurunuz demo modunda yerel olarak kaydedildi. Supabase baglandiginda ayni akisi canli kullanabilirsiniz.",
  };
}
