
type PostType = {
  id:string,
  title: string;
  content: string;
};


declare namespace global {
  var prisma: import("@prisma/client").PrismaClient;
}