"use server";

import { z } from "zod";
import prisma from "@/lib/server/prisma";
import bcrypt from "bcrypt";
import argon2 from "argon2";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const schema = z.object({
  name: z.string(),

  password: z.string(),
});

export default async function loginUser(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get("name"),
    password: formData.get("password"),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      message: "Invalid Login!!",
    };
  }

  // Mutate data

  try {
    const user = await prisma.user.findUnique({
      where: {
        name: validatedFields.data.name,
      },
    });

    if (user) {
      if (await argon2.verify(user?.password, validatedFields.data.password)) {
        console.log("pass match ");

        if (!cookies().get("auth")) {
          cookies().set("auth", user.id);

          return {
            message: "Success",
          };
        }

        return {
          message: "You are already logged in",
        };
      } else {
        console.log(" pass dont match ");
        return {
          message: "Invalid Login Credentials",
        };
      }
    } else {
      console.log("No match");
    }
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
}
