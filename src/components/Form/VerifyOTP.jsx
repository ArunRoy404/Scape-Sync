"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/UI/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/UI/form";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/UI/input-otp";



const formSchema = z.object({
    pin: z.string().min(6, {
        message: "Your one-time password must be 6 characters.",
    }),
});

const VerifyOTP = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            pin: "",
        },
    });

    function onSubmit(data) {
        console.log(data);
    }


    return (
        <div className="flex justify-center items-center">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full space-y-6"
                >
                    <FormField
                        control={form.control}
                        name="pin"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <InputOTP maxLength={6} {...field}>
                                        <InputOTPGroup
                                            className='flex gap-4 max-w-max mx-auto'
                                        >
                                            {
                                                [...new Array(6)].map((_, index) => {
                                                    return (
                                                        <InputOTPSlot
                                                            key={index}
                                                            index={index}
                                                            className='w-[56px] h-[56px] rounded-[8px] '
                                                        />
                                                    )
                                                })
                                            }
                                        </InputOTPGroup>
                                    </InputOTP>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="cursor-pointer w-full text-xs md:text-base font-bold leading-6  md:py-6">
                        Verify OTP
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default VerifyOTP;
