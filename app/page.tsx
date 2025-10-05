import { pages } from "@/config/paths";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();
  if (!session) {
    return redirect(pages.welcome);
  }

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <br />
      </div>
      <div className="flex gap-3">{JSON.stringify(session)}</div>
      <div className="mt-8">
        <Link href={pages.auth.signout}>выйти</Link>
      </div>
    </section>
  );
}
