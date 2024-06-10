"use client"

import SignOutButton from "@/components/SignOutButton"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Dashboard() {
    const session = useSession()
    const router = useRouter()
    console.log(session)
    const [isDeletingAccount, setIsDeletingAccount] = useState(false);

    const userImage = session?.data?.user?.image!
    const userName = session?.data?.user?.name!
    function getInitialAndUppercase(userName: string) {
        if (userName && typeof userName === 'string' && userName.length > 0) {
            const initial = userName.charAt(0).toUpperCase();
            return initial;
        } else {
            return null;
        }
    }

    useEffect(() => {
        if(session.status !== 'authenticated'){
            router.push('/login')
        }
    })

    return (
        <>
            <div className="min-h-full">
                <header className="bg-blue-100 shadow">
                    <div className="flex mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 justify-between">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                        <div className="flex items-center gap-10">
                            <Avatar className="cursor-pointer">
                                <AvatarImage src={userImage} alt="avatar" />
                                <AvatarFallback>{getInitialAndUppercase(userName)}</AvatarFallback>
                            </Avatar>
                            <div className="flex items-center gap-4">
                                {/* <Button
                                    variant={"destructive"}
                                    size={"icon"}
                                    className="text-white hover:text-red-800 focus:outline-none"
                                    onClick={deleteAccount}
                                    disabled={isDeletingAccount}
                                >
                                    <Trash className="w-6 h-6" />
                                </Button> */}
                                <SignOutButton />
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{/* Your content */}</div>
                </main>
            </div>
        </>
    )
}
