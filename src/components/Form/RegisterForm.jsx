"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
} from "@/components/UI/form";
import { Button } from "@/components/UI/button";
import InputCustom from "../Input/InputCustom";


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



export default function RegisterForm() {

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

    function onSubmit(values) {
        console.log("Form Data:", values);
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
                            Create Account
                        </Button>
                    </form>
                </Form>
            </div>
    );
}
