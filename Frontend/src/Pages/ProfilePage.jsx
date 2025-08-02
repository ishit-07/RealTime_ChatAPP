import { useAuthStore } from "../Store/useAuthStore";

const ProfilePage = () => {
    const {authUser} = useAuthStore();

    return (  
        <><h1>ProfilePage</h1></>
    );
}
 
export default ProfilePage;