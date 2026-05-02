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
                        <legend className="block text-xs sm:text-sm font-medium text-gray-600 mb-1">Email</legend>
                        <input type="email" className="input w-full px-3 py-2 text-sm border rounded-md sm:rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your email" {...register("email", { required: "provite a valid email" })} />
                        {
                            errors.email && <p className="text-red-500">{errors.email.message}</p>
                        }



                        <legend className="block text-xs sm:text-sm font-medium text-gray-600 mb-1">Password</legend>
                        <input type="password" className="input w-full px-3 py-2 text-sm border rounded-md sm:rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your password" {...register("password", { required: "provite a valid password" })} />
                        {
                            errors.password && <p className="text-red-500">{errors.password.message}</p>
                        }
                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 text-sm sm:text-base rounded-md sm:rounded-lg font-semibold transition">Login</button>
                    </fieldset>

                </form>
                 <p className="text-center text-xs sm:text-sm text-gray-600 mt-4">
                   have not any account !
                    <Link href={"/logIn"} className="text-blue-500 hover:underline">
                        Login
                    </Link>
                </p>

                 <div className="flex items-center gap-2 my-4">
                <hr className="flex-1 border-gray-300" />
                <span className="text-gray-400 text-xs">OR</span>
                <hr className="flex-1 border-gray-300" />
                </div>

              
               
                <button onClick={handleSocialLogin} className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 text-sm rounded-md sm:rounded-lg hover:bg-gray-100 transition"> <FcGoogle />login with google</button>
            </div>




        </div>
    );
};

export default loginpage;