"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
    email: z.string().email({
        message: "Enter a valid email address.",
    }),
});

const EmailSubmit = () => {
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => {
                        const isActive = field.value && field.value.length > 0;
                        return (
                            <FormItem>
                                <FormControl>
                                    <div className="relative">
                                        {/* Input */}
                                        <Input
                                            {...field}
                                            id={'email'}
                                            className="peer h-10 md:h-14 focus:outline-none focus:border-none text-[rgba(33,43,54,1)] text-base font-normal"
                                        />

                                        {/* Label */}
                                        <FormLabel
                                            htmlFor={'email'}
                                            className={`absolute left-3 transition-all text-[rgba(145,158,171,1)] px-1
                                            ${isActive
                                                    ? "top-0 -translate-y-1/2 text-xs bg-white"
                                                    : "top-1/2 text-base -translate-y-1/2 peer-focus:top-0 peer-focus:text-xs peer-focus:bg-white"}
                                                    `}
                                        >
                                            Email Address
                                        </FormLabel>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }
                    }
                />
                <Button type="submit" className="cursor-pointer w-full text-xs md:text-base font-bold leading-6  md:py-6">
                    Reset Password
                </Button>
            </form>
        </Form>
    );
};

export default EmailSubmit;
