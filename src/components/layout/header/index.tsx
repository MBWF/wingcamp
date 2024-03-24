import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname()
  return (
    <div className="hidden flex-col md:flex">
      <nav
        className={cn(
          "flex items-center space-x-4 lg:space-x-6 h-16 justify-center"
        )}
      >
        <Link
          href="/"
          className={`text-lg font-medium text-muted-foreground ${
            pathname === "/" && "text-white"
          } hover:text-primary`}
        >
          Jogos
        </Link>
        <div className="h-8">
          <Separator orientation="vertical" />
        </div>
        <Link
          href="/tabela"
          className={`text-lg font-medium text-muted-foreground ${
            pathname.includes("/tabela") && "text-white"
          } hover:text-primary`}
        >
          Tabela
        </Link>
      </nav>
    </div>
  );
}
