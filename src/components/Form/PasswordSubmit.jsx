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
import { useRouter } from "next/navigation";
import useTokenStore from "@/store/tokenStore";
import { toast } from "sonner";

// validation 
const FormSchema = z
    .object({
        password: z.string().min(8, "Password must be at least 8 characters"),
        confirmPassword: z.string().min(8, "Confirm your password"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Passwords do not match",
    });


const PasswordSubmit = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState(null)
    const router = useRouter()
    const token = useTokenStore(state => state.token)
    const clearToken = useTokenStore(state => state.clearToken)

    // formdata 
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = async (value) => {
        setIsLoading(true)
        const formdata = new FormData();

        // create data 
        formdata.append("password", value.password);
        formdata.append("password_confirmation", value.confirmPassword);
        formdata.append("token", token);

        // body 
        const requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        const response = await fetch("https://apitest.softvencefsd.xyz/api/reset-password", requestOptions)

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
            toast("Successful", {
                description: (
                    <span className="text-black">
                        Your Password is changed
                    </span>
                ),
                action: {
                    label: "Close",
                },
                duration: Infinity,
            })

            clearToken()
            // redirect to successful page
            router.push('/reset-password-successful')
        }

        // unsuccessful 
        else {
            setStatus({ type: 'error', ...data });
        }


    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
                <InputCustom form={form} label={'Password'} id={'password'} />
                <InputCustom form={form} label={'Confirm Password'} id={'confirmPassword'} />

                <Button type="submit" className="cursor-pointer w-full text-xs md:text-base font-bold leading-6  md:py-6">
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

export default PasswordSubmit;