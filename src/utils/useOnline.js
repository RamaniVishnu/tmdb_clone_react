import { useState } from "react";

export function useOnline() {
    const [isOnline,setIsOnline] = useState(true);

    const handleOnline =() =>{
        console.log('you are online');
        setIsOnline(true)
    }

    const handleOffline =() =>{
        console.log('you are offffffff')
        setIsOnline(false)
    }


    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

}