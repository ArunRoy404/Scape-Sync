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
import useEmailStore from "@/store/emailStore";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Spinner from "../UI/Spinner";
import Message from "../UI/Message";
import { toast } from "sonner";
import useTokenStore from "@/store/tokenStore";


// validation 
const formSchema = z.object({
    pin: z.string().min(6, {
        message: "Your one-time password must be 6 characters.",
    }),
});

const VerifyOTP = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState(null)
    const clearEmail = useEmailStore(state => state.clearEmail)
    const clearRedirect = useEmailStore(state => state.clearRedirect)
    const router = useRouter();
    const email = useEmailStore((state) => state.email);
    const redirect = useEmailStore((state) => state.redirect);
    const setToken = useTokenStore((state) => state.setToken)


    // link adjust 
    let API = 'https://apitest.softvencefsd.xyz/api/forgot-verify-otp'
    if (redirect === 'registration-successful') {
        API = 'https://apitest.softvencefsd.xyz/api/verify_otp'
    }


    // formdata 
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            pin: "",
        },
    });

    const onSubmit = async (value) => {
        setIsLoading(true)
        const formdata = new FormData();
        formdata.append("email", email);
        formdata.append("otp", value.pin);


        // body 
        const requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };


        const response = await fetch(API, requestOptions)
        // .then(response => response.json())
        // .then(result => setStatus(result))
        // .catch(error => setStatus({ error }))
        // .finally(() => { setIsLoading(false) })


        // get json 
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
            toast("Verification Successful", {
                description: (
                    <span className="text-black">
                        Your Email is Verified.
                    </span>
                ),
                action: {
                    label: "Close",
                },
                duration: Infinity,
            })

            // save token 
            if(data.data.token){
                setToken(data.data.token)
            }
            
            clearEmail()
            clearRedirect()
            router.push(redirect)
        }
        // unsuccessful
        else {
            setStatus({ type: 'error', ...data });
        }
    }


    return (
        <div className="flex justify-center items-center">

            {/* form  */}
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

                    <Button disabled={isLoading} type="submit" className="cursor-pointer w-full text-xs md:text-base font-bold leading-6  md:py-6">
                        {
                            isLoading
                                ? <Spinner stroke="10" color="white" size="10" />
                                : 'Verify OTP'
                        }
                    </Button>

                    {/* status message  */}
                    <Message status={status} />
                </form>
            </Form>
        </div>
    );
};

export default VerifyOTP;
