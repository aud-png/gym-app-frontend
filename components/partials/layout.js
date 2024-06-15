import AuthHeader from "./AuthHeader";
import Header from "./Header";
import { useRouter } from "next/router";
export default function Layout({ children, profile }) {
  const router = useRouter();

  return (
    <div>
      {profile && <AuthHeader profile={profile} />}

      {!profile && router.asPath != "/login" && <Header />}
      <main>{children}</main>
    </div>
  );
}
