import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(3, "Ad soyad en az 3 karakter olmali."),
  phone: z.string().min(10, "Telefon numarasi gecersiz gorunuyor."),
  email: z.email("Gecerli bir e-posta girin."),
  level: z.string().min(1, "Lutfen seviyenizi secin."),
  interest: z.string().min(1, "Lutfen ilgilendiginiz alani secin."),
  message: z.string().min(10, "Mesaj en az 10 karakter olmali."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export type ContactActionState = {
  success: boolean;
  message: string;
  fieldErrors?: Partial<Record<keyof ContactFormValues, string>>;
};

export const initialContactActionState: ContactActionState = {
  success: false,
  message: "",
};
