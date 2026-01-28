"use server"
import prisma from "@/lib/prisma";

export const getData = async () => {
  try {
    const res = await prisma.test.findMany();
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const createData = async (name: string, email: string, phone: string) => {
  try {
    const res = await prisma.test.create({
      data: {
        name,
        email,
        phone,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
