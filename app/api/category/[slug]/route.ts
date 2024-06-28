import prisma from "@/lib/server/prisma";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const data = await prisma.products.findMany({
    where: {
      category: params.slug,
    },
  });

  return Response.json({ data: data });
}
