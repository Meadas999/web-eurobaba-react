import {Button, Container} from 'reactstrap';
import LoginButton from "../Components/LoginButton";
import LogoutButton from "../Components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from 'react'
import logoutButton from "../Components/LogoutButton";
import axios from "axios";

const Home = () => {
    const{ user, isAuthenticated, isLoading } = useAuth0();
    const authButton = isAuthenticated ? <LogoutButton/> : <LoginButton/>;
    const [picture, setPicture] = useState(null);


     const uploadPicture = (e) => {
        this.setState({
            /* contains the preview, if you want to show the picture to the user
               you can access it with this.state.currentPicture
           */
            picturePreview : URL.createObjectURL(e.target.files[0]),
            /* this contains the file we want to send */
            pictureAsFile : e.target.files[0]
        })
    };

    const setImageAction = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("File", picture);
        formData.append("userid", user.sub);

        const data = await axios.post("https://eurobaba.azurewebsites.net/api/ImageUpload?", formData, {
            headers: { "content-type": "multipart/form-data" },
        });

        if (data.status === 200) {
            console.log("Successfully uploaded image");
        } else {
            console.log("Error Found");
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }


    if(isAuthenticated) {
        return (
            <div>
                <Container>
                    {isAuthenticated.toString()}
                    <br/>
                    <img src={"https://eurobabastorage.blob.core.windows.net/eurobabastorage/profilePic_" + user.sub}
                         width={120} height={150}></img>
                    <br/>
                    <form onSubmit={setImageAction}>
                        <input type="file" onChange={(e) => setPicture(e.target.files[0])}/>
                        <br/>
                        <br/>
                        <Button type="submit" name="upload">
                            Upload
                        </Button>
                    </form>
                </Container>
            </div>
        );
    }

    return (
        <div>
            Please Log in to use the application.
        </div>
    );
}
export default Home;
