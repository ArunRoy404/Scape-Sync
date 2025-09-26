'use client'

import UserRolePage from '@/pages/UserRolePage';
import { useSession } from 'next-auth/react';

const page = () => {
    const { data: session } = useSession()
    return <UserRolePage userRole={session?.user?.role} />
}
export default page;