import React from 'react'
import Footer from '../Components/Footer/Footer'
import HomeContent from '../Components/HomeContent/HomeContent'
import SideNavbar from '../Components/SideNavbar/SideNavbar'
import Styled from 'styled-components'
import Navbar from '../Components/Navbar/Navbar'

    const MainPageStyled = Styled.div`
        .navbar{
            background-color:yellow;
            height:5em;
            width:100%;
        }
        .side{
            height:100vh;
            width: 15em;
            position:fixed;            
            background-color:#26668e;
        }
        .content{
            margin-left:15em;
        }
        .footer{
            width:100%;
            position:fixed;
            bottom:0;
            height:2em;
            background-color:gray;
        }
    `;

const MainPage = () => {
    return (
    <MainPageStyled>
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="side">
            <SideNavbar/>
        </div>
        <div className="content">
            <HomeContent/>
        </div>
        <div className="footer">
            <Footer/>
        </div>
    </MainPageStyled>
    )
}

export default MainPage
