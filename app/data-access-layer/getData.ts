import "server-only"
import prisma from "@/lib/prisma";
import { cacheTag } from "next/cache";

export const getData = async () => {
  'use cache'
  cacheTag('user')
  try {
    const res = await prisma.test.findMany();
    return res;
  } catch (error) {
    console.log(error);
  }
};


