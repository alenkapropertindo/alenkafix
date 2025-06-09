
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ViewRedirect from "./view";
interface PageProps {
  params: Promise<{ token: string }>;
}
export default async function RedirectHandler(props: PageProps) {
  const { token: tokenParam } = await props.params;
  const cookieStore = await cookies();
  const cookieToken = cookieStore.get("redirect_state")?.value;
  // const tokenParam = (await params).token;
  // console.log([cookieToken,tokenParam])
  if (!cookieToken || cookieToken !== tokenParam) {
    return redirect("/auth/error?code=invalid_redirect_token");
  }
  return (
    <ViewRedirect/>
  );
}
