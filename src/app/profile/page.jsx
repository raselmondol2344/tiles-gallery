"use client"

import { UpdateProfile } from "@/components/UpdateProfile";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const profilepage = () => {
    const userData = authClient.useSession()
      const user = userData.data?.user;
      console.log(user);

    return (
        <div>
            <Card className="max-w-96 mx-auto flex flex-col items-center mt-10 bg-blue-100">
                <Avatar  className="h-20 w-20">
                             <Avatar.Image alt="John Doe" 
                             src={user?.image}
                              referrerPolicy="no-referrer" 
                              />
                             <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                            </Avatar>
                            <h2 className="text-xl font-bold">{user?.name}</h2>
                            <p className="text-muted">{user?.email}</p>

                            <UpdateProfile></UpdateProfile>

            </Card>
            
        </div>
    );
};

export default profilepage;