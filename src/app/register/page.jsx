"use client"
import { useForm } from "react-hook-form"
import Link from "next/link";
import { url } from "better-auth";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";



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
        

         console.log(res,error);

         if(error){
            alert(error.message)
         }
         if(res){
            alert("signUp sucessfull")
            router.push("/logIn");
         }
    }



    return (
        <div className="container mx-auto  flex justify-center items-center">
            <div className=" rounded-xl bg-slate-200 py-10 px-20 mt-10 ">
                <h2 className="font-semibold text-lg mb-5">Create a account </h2>
                <form className="space-y-5" onSubmit={handleSubmit(handleRegisterdatafun)}>

                    <fieldset className="fieldset ">

                        <legend className="fieldset-legend">Name</legend>
                        <input type="text" className="input" placeholder="Enter your name" {...register("name", { required: "provite a valid name" })} />
                        {
                            errors.name && <p className="text-red-500">{errors.name.message}</p>
                        }


                        <legend className="fieldset-legend">photo URL</legend>
                        <input type="text" className="input" placeholder="Enter your photo url" {...register("photo_url", { required: "provite a valid photo url" })} />
                        {
                            errors.photo_url && <p className="text-red-500">{errors.photo_url.message}</p>
                        }





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

                        <button className="btn btn-neutral mt-4">create your account</button>
                    </fieldset>

                </form>
                <p>alrady have a account ! <Link href={'/logIn'} className="text-blue-500">Login</Link></p>
            </div>
        </div>
    );
};

export default registerpage;