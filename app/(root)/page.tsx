import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

export default async function Home() {
  const handleLogout = async () => {
    "use server";
    await signOut({ redirectTo: ROUTES.SIGN_IN });
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] text-sm items-center justify-items-center min-h-scrdiveen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="h1-bold">StackOverflow</h1>
      <p className="font-space-grotesk">Hello world</p>

      <form action={handleLogout}>
        <Button type="submit">Logout</Button>
      </form>
    </div>
  );
}
