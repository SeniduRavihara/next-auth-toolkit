import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import LoginButton from "@/components/auth/login-button";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "800", "200"],
  display: "swap",
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-gradient-to-r from-fuchsia-600 to-pink-600">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-extrabold text-white drop-shadow-md",
            poppins.className
          )}
        >
          🔐 Auth
        </h1>
        <p className="text-white text-lg">A simple authantication service</p>
        <div>
          <LoginButton>
            <Button
              variant="secondary"
              size="lg"
              className="text-blue-900 font-semibold"
            >
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
