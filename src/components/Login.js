import { GoogleLogin } from "@react-google-login";

const client_id = "911289990493-rf1kslb8qrb23q5bfqjed8s48pr29266.apps.googleusercontent.com";

function Login() {

    const onSuccess = (result) => {
        console.log("Successful Login. Current User: ", result.profileObj);
    }

    const onFailure = (result) => {
        console.log("Failed to authenticate user. ", result);
    }
    
    return (
        <div>
            <GoogleLogin
                clientId={client_id}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}