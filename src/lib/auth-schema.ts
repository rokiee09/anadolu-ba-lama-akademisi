export type AuthActionState = {
  success: boolean;
  message: string;
};

export const initialAuthActionState: AuthActionState = {
  success: false,
  message: "",
};
