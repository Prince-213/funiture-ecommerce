import prisma from "@/lib/server/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  const data = await prisma.products.findMany();

  return Response.json({ data: data });
}
