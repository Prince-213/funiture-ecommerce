"use server";

import { z } from "zod";
import prisma from "@/lib/server/prisma";
import bcrypt from "bcrypt";
import argon2 from "argon2";

const schema = z.object({
  email: z.string({
    invalid_type_error: "Invalid Email",
    required_error: "Please enter an email address",
  }),

  name: z
    .string({
      invalid_type_error: "Invalid Name",
      required_error: "Please enter a username",
    })
    .min(4, "Username is too short"),

  password: z
    .string({
      invalid_type_error: "Invalid Password",
      required_error: "Please provide a valid password",
    })
    .min(4, "Your password is too short"),
});

export default async function createUser(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
    password: formData.get("password"),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      message: "Invalid Credentials",
    };
  }

  // Mutate data

  const hash = await argon2.hash(validatedFields.data.password);

  try {
    await prisma.user.create({
      data: {
        name: validatedFields.data.name,
        email: validatedFields.data.email,
        password: hash,
      },
    });

    return {
      message: "Registration successful",
    };
  } catch (error) {
    if (error) {
      console.log(error);
      return {
        message: "Error creating account",
      };
    }
  }
}
