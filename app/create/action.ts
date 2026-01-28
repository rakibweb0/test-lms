'use server'

import prisma from "@/lib/prisma";
import { updateTag } from "next/cache";

export const createData = async (name: string, email: string, phone: string) => {
  try {
    const res = await prisma.test.create({
      data: {
        name,
        email,
        phone,
      },
    });
    updateTag('user')
    return res;
  } catch (error) {
    console.log(error);
  }
};