'use client';

import { SignIn } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/ui/themes";
import Image from "next/image";

export default function LandingPage() {
    return (
        <main className="flex items-center p-10 gap-24 animate-fade-in max-md:flex-col">
            <section className="flex flex-col items-center">
                <Image src='/assets/logo.svg' width={300} height={300} alt="Logo"/>

                {/* Main Heading */}
                <h1 className="text-2xl font-black lg:text-3xl">Your time, perfectly planned</h1>

                {/* Sub Heading */}
                <p className="font-extralight">
                    Join millions of professionals who easily book meetings with the #1 scheduling tool
                </p>

                {/* Illustration below the text */}
                <Image src='/assets/planning.svg' alt="Logo" width={500} height={500} />

                {/* Clerk Sign-In Component with custom theme */}
                <div className="mt-3">
                    <SignIn routing="hash"
                    appearance={{theme: neobrutalism}}/>
                </div>
            </section>


        </main>
        
    )
}