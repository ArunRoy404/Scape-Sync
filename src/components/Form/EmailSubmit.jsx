"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/UI/button";
import {
    Form,
} from "@/components/UI/form";
import InputCustom from "../Input/InputCustom";
import Message from "../UI/Message";
import Spinner from "../UI/Spinner";
import { toast } from "sonner";
import useEmailStore from "@/store/emailStore";
import { useRouter } from "next/navigation";

// validation 
const FormSchema = z.object({
    email: z.string().email({
        message: "Enter a valid email address.",
    }),
});

const EmailSubmit = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState(null)
    const setEmail = useEmailStore(state => state.setEmail)
    const setRedirect = useEmailStore(state => state.setRedirect)
    const router = useRouter()

    // form data 
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = async (value) => {
        setIsLoading(true)
        const formdata = new FormData();

        // create data 
        formdata.append("email", value.email);

        // body 
        const requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };


        const response = await fetch("https://apitest.softvencefsd.xyz/api/forgot-password", requestOptions)

        let data
        try {
            data = await response.json();
        } catch (error) {
            setStatus({ type: 'server-error', message: "Something went wrong", error })
        } finally {
            setIsLoading(false)
        }

        // successful 
        if (response.ok) {
            setStatus({ type: 'success', ...data })
            toast("OTP Sent.", {
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

            // redirect to otp verification 
            setEmail(value.email)
            setRedirect('/reset-password')
            router.push('/verify')
        }

        // unsuccessful 
        else {
            setStatus({ type: 'error', ...data });
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
                <InputCustom form={form} label={'Email'} id={'email'} />
                <Button disabled={isLoading} type="submit" className="cursor-pointer w-full text-xs md:text-base font-bold leading-6  md:py-6">
                    {
                        isLoading
                            ? <Spinner stroke="10" color="white" size="10" />
                            : 'Reset password'
                    }
                </Button>

                <Message status={status} />
            </form>
        </Form>
    );
};

export default EmailSubmit;
