import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const page =async () => {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const user = await getUser();
    console.log(user)
    const isUserAuthenticated = await isAuthenticated();
    if (!isUserAuthenticated) {
      redirect("/api/auth/login");
    }
  
    return (
        <div>
            <p className="text-2xl text-center mt-8 text-black font-bold">{user?.given_name} {user?.family_name}</p>
            <h2 className="text-purple-500 mt-2 text-center text-3xl font-semibold" >"Welcome to Your profile!"</h2>
        </div>
    );
};

export default page;