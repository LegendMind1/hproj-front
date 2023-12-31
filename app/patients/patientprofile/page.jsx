'use client'
import Cookies from 'js-cookie'
import MakePatientProfile from '@/app/components/MakePatientProfile'
import { useRouter } from 'next/navigation';

export default function PatientProfile () {
    const router = useRouter();

    if (Cookies.get('usertype') != undefined) {
    return (
        <>
            <div>
                <MakePatientProfile />
            </div>
        </>
    )}
    else {
        router.push('/')
    }

}