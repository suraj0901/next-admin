import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET (req: NextApiRequest, res: NextApiResponse) {
  console.log("/revalidate")
  const url = new URL(req.url!)
  const {searchParams} = url
  const secret = searchParams.get("secret")
  console.log({secret})
  if (secret !== process.env.SECRET) {
    return NextResponse.json({ message: "Invalid Token" });
  }
  try {
    await res.revalidate("/");
    return NextResponse.json({ revalidate: true });
  } catch (error) {
    return NextResponse.json({status: 0, statusText: "Error reavalidating"});
  }
}
