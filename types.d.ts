
type PostType = {
  title: string;
  content: string;
};


declare namespace global {
  var prisma: import("@prisma/client").PrismaClient;
}