import { Logo } from "@/components/Logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const NavBar = () => {
    return(
        <nav className="top-0 w-full px-4 shadow-sm h-14 bg-white flex items-center fixed">   
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <Logo />
                <div className="space-x-4 md:block md:w-auto justify-between flex items-center w-full">
                    <Button size={'sm'} variant={"outline"} asChild>
                        <Link href={"/sign-in"}>
                        Login
                        </Link>
                    </Button>
                    <Button size={"sm"} asChild>
                        <Link href={"/sign-up"}>
                        Get Taskify for free
                        </Link>
                    </Button>

                </div>
            </div>
        </nav>
    )
}