import { Footer } from "./_components/Footer";
import { NavBar } from "./_components/NavBar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full bg-slate-100">
            {/* Navbar */}
            <NavBar />
            <main className="pt-40 pb-20 bg-slate-100">
                {children}
            </main>
            {/* footer */}
            <Footer />
        </div>
    )
}
export default MarketingLayout;