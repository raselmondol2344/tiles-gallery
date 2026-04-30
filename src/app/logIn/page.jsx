"use client"
import { useForm } from "react-hook-form"
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";



const loginpage = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()

    const handleLogindatafun = async (data) => {
        //console.log(data);

        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: "/",
        });
        console.log(res, error);
    }

    const handleSocialLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
            <div className=" rounded-xl bg-white p-20">
                <h2 className="font-semibold text-lg mb-5">Login your account </h2>
                <form className="space-y-5" onSubmit={handleSubmit(handleLogindatafun)}>

                    <fieldset className="fieldset ">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" className="input" placeholder="Enter your email" {...register("email", { required: "provite a valid email" })} />
                        {
                            errors.email && <p className="text-red-500">{errors.email.message}</p>
                        }



                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" className="input" placeholder="Enter your password" {...register("password", { required: "provite a valid password" })} />
                        {
                            errors.password && <p className="text-red-500">{errors.password.message}</p>
                        }

                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>

                </form>
                <p>have not any account ! <Link href={'/register'} className="text-blue-500">register</Link></p>
                <h1 className="font-sm text-lg text-center mb-5">or</h1>
                <button onClick={handleSocialLogin} className="btn btn-outline border-blue-300 w-full rounded-full text-gray-600"> <FcGoogle />login with google</button>
            </div>




        </div>
    );
};

export default loginpage;