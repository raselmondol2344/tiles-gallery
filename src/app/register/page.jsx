"use client"
import { useForm } from "react-hook-form"
import Link from "next/link";
import { url } from "better-auth";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";




const registerpage = () => {


    const router = useRouter();
    const { register, handleSubmit, formState: { errors }, } = useForm()

    const handleRegisterdatafun = async (data) => {
        // console.log(data);

        const { email, name, photo_url, password } = data;
        //console.log(name, email, password, photo_url);



        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo_url,
            callbackURL: '/logIn',
        });


        console.log(res, error);

        if (error) {
            alert(error.message)
        }
        if (res) {
            alert("signUp sucessfull")
            router.push("/logIn");
        }


    }
    const handleSocialSignUp = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });

    };




    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-300 px-3 sm:px-4">
            <div className=" w-full max-w-sm sm:max-w-md bg-white shadow-lg sm:shadow-xl rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-gray-200 ">
                <h2 className="text-xl sm:text-2xl font-bold text-center mb-5 text-gray-700">Create a account </h2>
                <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit(handleRegisterdatafun)}>

                    <fieldset className="fieldset ">

                        <legend className=" block text-xs sm:text-sm font-medium text-gray-600 mb-1">Name</legend>
                        <input type="text" className="input w-full px-3 py-2 text-sm border rounded-md sm:rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your name" {...register("name", { required: "provite a valid name" })} />
                        {
                            errors.name && <p className="text-red-500">{errors.name.message}</p>
                        }


                        <legend className="block text-xs sm:text-sm font-medium text-gray-600 mb-1">photo URL</legend>
                        <input type="text" className="input w-full px-3 py-2 text-sm border rounded-md sm:rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your photo url" {...register("photo_url", { required: "provite a valid photo url" })} />
                        {
                            errors.photo_url && <p className=" text-red-500 text-xs mt-1">{errors.photo_url.message}</p>
                        }





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

                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 text-sm sm:text-base rounded-md sm:rounded-lg font-semibold transition">create your account</button>
                    </fieldset>

                </form>
                <p className="text-center text-xs sm:text-sm text-gray-600 mt-4">
                    Already have an account?{" "}
                    <Link href={"/logIn"} className="text-blue-500 hover:underline">
                        Login
                    </Link>
                </p>
                <div className="flex items-center gap-2 my-4">
                <hr className="flex-1 border-gray-300" />
                <span className="text-gray-400 text-xs">OR</span>
                <hr className="flex-1 border-gray-300" />
                </div>
                
                <button onClick={handleSocialSignUp} className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 text-sm rounded-md sm:rounded-lg hover:bg-gray-100 transition"> <FcGoogle />login with google</button>
            </div>
        </div>


    );
};

export default registerpage;