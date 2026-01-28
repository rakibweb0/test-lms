import prisma from "@/lib/prisma";

export default async function Home() {
  const getData = await prisma.test.findMany()
  return (
    <div>Hello {getData[0].name}</div>
  );
}
