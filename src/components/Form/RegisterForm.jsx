"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
} from "@/components/UI/form";
import { Button } from "@/components/UI/button";
import InputCustom from "../Input/InputCustom";
import Spinner from "../UI/Spinner";
import { useState } from "react";
import { toast } from "sonner";
import Message from "../UI/Message";
import useEmailStore from "@/store/emailStore";
import { useRouter } from "next/navigation";


const formSchema = z
    .object({
        firstName: z.string().min(1, "First name is required"),
        lastName: z.string().min(1, "Last name is required"),
        email: z.string().email("Enter a valid email"),
        password: z.string().min(8, "Password must be at least 8 characters"),
        confirmPassword: z.string().min(8, "Confirm your password"),
        agree: z.boolean().refine((val) => val, {
            message: "You must agree to the terms",
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Passwords do not match",
    });

const RegisterForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState(null)
    const setEmail = useEmailStore(state => state.setEmail)
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            agree: false,
        },
    });


    const onSubmit = async (values) => {
        setIsLoading(true)
        const formdata = new FormData();

        formdata.append('first_name', values.firstName)
        formdata.append("last_name", values.lastName);
        formdata.append("email", values.email);
        formdata.append("password", values.password);
        formdata.append("password_confirmation", values.confirmPassword);
        formdata.append("terms", values.agree ? "true" : "false");


        const requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        try {
            const response = await fetch("https://apitest.softvencefsd.xyz/api/register", requestOptions)
            // .then(response => response.json())
            // .then(result => setStatus(result))
            // .catch(error => setStatus({ error }))
            // .finally(() => { setIsLoading(false) })
            const data = await response.json();


            if (response.ok) {
                setStatus({ type: 'success', ...data })
                toast("Account Created Successfully.", {
                    description: (
                        <span className="text-black">
                            Your OTP is: {data?.data?.otp}
                        </span>
                    ),
                    action: {
                        label: "Close",
                    },
                    duration: Infinity,
                })
                setEmail(values.email)
                router.push('/verify')

            } else {
                setStatus({ type: 'error', ...data });
            }
        } catch (error) {
            setStatus({ type: 'server-error', message: "Something went wrong", error })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    {/* input fields */}
                    <div className="flex items-center gap-4">
                        <InputCustom form={form} label={'First Name'} id={'firstName'} />
                        <InputCustom form={form} label={'Last Name'} id={'lastName'} />
                    </div>
                    <InputCustom form={form} label={'Email'} id={'email'} />
                    <InputCustom form={form} label={'Password'} id={'password'} />
                    <InputCustom form={form} label={'Confirm Password'} id={'confirmPassword'} />
                    <InputCustom form={form} id={'agree'} checkBox={true} >
                        I agree to Tech Takes
                        <a href="#" className="border-b-1 border-black cursor-pointer">Terms of Service</a>
                        and
                        <a href="#" className="border-b-1 border-black cursor-pointer">Privacy Policy</a>.
                    </InputCustom>


                    {/* Submit Button */}
                    <Button type="submit" className="cursor-pointer w-full text-xs md:text-base font-bold leading-6  md:py-6">
                        {
                            isLoading
                                ? <Spinner stroke="10" color="white" size="10" />
                                : ' Create Account '
                        }
                    </Button>

                    <Message status={status} />
                </form>
            </Form>
        </div>
    );
}

export default RegisterForm;