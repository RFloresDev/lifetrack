import DeployButton from "@/components/deploy-button";
import AuthButton from "@/components/header-auth";
import { Link } from "lucide-react";

export default async function Home() {
	return (
		<div className="flex-1 w-full flex flex-col gap-20 items-center">
			<nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
				<div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
					<DeployButton />
					{<AuthButton />}
				</div>
			</nav>
			<div className="fixed inset-0 z-[-1]"></div>
			<div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3 z-0">
				<main className="flex-1 flex flex-col gap-6 border p-4 text-lg">
					<Link href="/dashboard"></Link>
				</main>
			</div>

			<footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
				<p>
					Powered by{" "}
					<a
						href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
						target="_blank"
						className="font-bold hover:underline"
						rel="noreferrer">
						Supabase
					</a>
				</p>
			</footer>
		</div>
	);
}
