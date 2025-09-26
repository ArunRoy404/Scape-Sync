"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/UI/form";
import { Button } from "@/components/UI/button";
import InputCustom from "../Input/InputCustom";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Spinner from "../UI/Spinner";
import Message from "../UI/Message";


// validation 
const formSchema = z
    .object({
        email: z.string().email("Enter a valid email"),
        password: z.string().min(8, "Password must be at least 8 characters"),
        rememberMe: z.boolean()
    })


export default function LoginForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(false)
    const router = useRouter()

    // formdata 
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
    });


    const onSubmit = async (values) => {
        setIsLoading(true);
        const result = await signIn("credentials", {
            redirect: false,
            email: values.email,
            password: values.password,
            rememberMe: values.rememberMe,
        });

        setIsLoading(false);

        // successful 
        if (result.ok) {
            setStatus({ type: 'success', message: "Login Successful" })
            toast("Login Successful.", {
                action: {
                    label: "Close",
                },
                duration: Infinity,
            })
            router.push('/')
        }

        // unsuccessful 
        else {
            setStatus({ type: 'error', message: "Invalid Credentials" })
        }
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
                    <Button disabled={isLoading} type="submit" className="cursor-pointer w-full text-xs md:text-base font-bold leading-6  md:py-6">
                        {
                            isLoading
                                ? <Spinner stroke="10" color="white" size="10" />
                                : ' Create Account'
                        }
                    </Button>


                    {/* status message  */}
                    <Message status={status} />
                </form>
            </Form>
        </div>
    );
}
