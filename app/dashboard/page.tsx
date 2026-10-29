import { auth } from "@clerk/nextjs/server";

export const instant = false;

export default async function Dashboard() {
  await auth.protect();

  return <h1>Dashboard</h1>;
}
