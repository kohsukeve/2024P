import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  // usersテーブルから全件取得
  const users = await prisma.payment.findMany();
  return Response.json(users);
}