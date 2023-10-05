import { useContext } from "react";
import { authContext } from "../../provider/AuthProvider";

const SocialLogin = () => {

    const {signInWithGoogle} = useContext(authContext);

    const handleSignInWithGoogle = (media) => {
        media()
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <>
            <div className="divider">continue with</div>
            <div className="">
                <button onClick={()=> handleSignInWithGoogle(signInWithGoogle)} className="btn btn-neutral btn-sm">Google</button>
            </div>
        </>
    );
};

export default SocialLogin;