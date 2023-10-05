import { useContext } from "react";
import { authContext } from "../../provider/AuthProvider";

const SocialLogin = () => {

    const {signInWithGoogle, signInWithGithub} = useContext(authContext);

    const handleSignInWith = (media) => {
        media()
        .then(res => console.log(res))
        .catch(err => console.log(err.message))
    }

    return (
        <>
            <div className="divider">continue with</div>
            <div className="flex justify-between">
                <button onClick={()=> handleSignInWith(signInWithGoogle)} className="btn btn-neutral btn-sm">Google</button>

                <button onClick={()=> handleSignInWith(signInWithGithub)} className="btn btn-neutral btn-sm">Github</button>
            </div>
        </>
    );
};

export default SocialLogin;