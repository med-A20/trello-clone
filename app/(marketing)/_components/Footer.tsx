import { Logo } from "@/components/Logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const Footer = () => {
    return(
        <footer className="bottom-0 w-full p-4  fixed bg-slate-100">   
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <Logo />
                <div className="space-x-4 md:block md:w-auto justify-between flex items-center w-full">
                    <Button size={'sm'} variant={"ghost"}>
                        Privacy Policy
                    </Button>
                    <Button size={'sm'} variant={"ghost"}>
                        Terms of Services
                    </Button>

                </div>
            </div>
        </footer>
    )
}