"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
} from "@/components/UI/form";
import { Button } from "@/components/UI/button";
import InputCustom from "../Input/InputCustom";
import Link from "next/link";


const formSchema = z
    .object({
        email: z.string().email("Enter a valid email"),
        password: z.string().min(8, "Password must be at least 8 characters"),
        rememberMe: z.boolean()
    })



export default function LoginForm() {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
    });

    function onSubmit(values) {
        console.log("Form Data:", values);
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">


                    <InputCustom form={form} label={'Email'} id={'email'} />
                    <InputCustom form={form} label={'Password'} id={'password'} />

                    <div className="flex items-center justify-between">
                        <InputCustom form={form} id={'rememberMe'} checkBox={true} >
                            Remember me
                        </InputCustom>
                        <Link
                            href={'/reset-password-email'}
                            className='text-primary font-semibold text-sm'
                        >
                            Forgot password?
                        </Link>
                    </div>


                    {/* Submit Button */}
                    <Button type="submit" className="cursor-pointer w-full text-xs md:text-base font-bold leading-6  md:py-6">
                        Create Account
                    </Button>
                </form>
            </Form>
        </div>
    );
}
