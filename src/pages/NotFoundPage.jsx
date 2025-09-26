"use client";

import { Button } from "@/components/UI/button";
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
            <h1 className="text-9xl font-extrabold text-gray-300">404</h1>
            <h2 className="mt-4 text-3xl font-bold text-gray-700">
                Page Not Found
            </h2>
            <p className="my-2 text-gray-500">
                Sorry, the page you are looking for does not exist.
            </p>
            <Link
                href="/"
            >
                <Button className="cursor-pointer w-full text-xs md:text-base font-bold leading-6  md:py-6">
                    Go Back Home
                </Button>
            </Link>
        </div>
    );
}



export default NotFoundPage;