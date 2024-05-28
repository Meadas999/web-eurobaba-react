import {Button, Container} from 'reactstrap';
import LoginButton from "../Components/LoginButton";
import LogoutButton from "../Components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from 'react'
import logoutButton from "../Components/LogoutButton";

const Home = () => {
    const{ user, isAuthenticated, isLoading } = useAuth0();
    const authButton = isAuthenticated ? <LogoutButton/> : <LoginButton/>;


    if (isLoading) {
        return <div>Loading...</div>;
    }
    if(isAuthenticated){
        return (
            <div>Logged In
                <LogoutButton/>
            </div>
        );
    }
    return (

        <div>
            <Container>
                {isAuthenticated.toString()}
                <br/>

                <br/>
                <Button
                    color="primary">
                    Click Me
                </Button>
            </Container>
            {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
        </div>
    );
}
export default Home;
