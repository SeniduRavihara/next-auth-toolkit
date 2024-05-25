"use server";

import { getUserByEmail } from "@/data/user";
import { sendPasswordResetEmail } from "@/lib/mail";
import { genaratePasswordResetToken } from "@/lib/tokens";
import { resetSchema } from "@/schemas";
import { z } from "zod";

export const reset = async (values: z.infer<typeof resetSchema>) => {
  const validatedFields = resetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid email!" };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email not found!" };
  }

  const verificationToken = await genaratePasswordResetToken(email);
  await sendPasswordResetEmail(
    verificationToken.email,
    verificationToken.token
  );

  return { success: "Reset email sent!" };
};
