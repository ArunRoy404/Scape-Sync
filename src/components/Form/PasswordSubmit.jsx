"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/UI/button";
import {
    Form,

} from "@/components/UI/form";
import InputCustom from "../Input/InputCustom";

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
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
                <InputCustom form={form} label={'Password'} id={'password'} />
                <InputCustom form={form} label={'Confirm Password'} id={'confirmPassword'} />

                <Button type="submit" className="cursor-pointer w-full text-xs md:text-base font-bold leading-6  md:py-6">
                    Reset Password
                </Button>
            </form>
        </Form>
    );
};

export default PasswordSubmit;