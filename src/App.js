import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import TweetDetailScreen from './screens/TweetDetailScreen';
import UserDetailsProvider from './Provider/StateProvider';
import UserScreen from './screens/UserScreen';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const PageContainer = styled(Container)`
height: 100%;
`
const NavBar = styled.div`
height: 50px;
font-size: 18px;
`
const NavBarItem = styled.div`
background-color: #096dd9;
color: white;
`
const PageContent = styled.div`
height: calc(100% - 50px);
overflow: auto;
border-left: solid 0.5px #8d8d8d;
border-bottom: solid 0.5px #8d8d8d;
border-right: solid 0.5px #8d8d8d;
`



const AppIcon = styled.div`
cursor: pointer;

`
function App() {
  let navigate = useNavigate();
  const { pathname } = useLocation();

  const navigateToHome = () => {
    navigate("/",{replace: true})
  }
  const navigateBack = () => {
    navigate(-1)
  }
  return (
    <UserDetailsProvider>
      <PageContainer>
        <NavBar className='d-flex flex-column justify-content-end'>
          <NavBarItem className="px-2 d-flex">
            <AppIcon className="me-2"onClick={navigateToHome}>Welcome to Dummy Twitter</AppIcon>
            {
              (pathname !== "/") ?
              <>| <AppIcon className="mx-2"onClick={navigateBack}>back</AppIcon></>
              : 
              null
            }
          </NavBarItem>
        </NavBar>
        <PageContent className='d-flex flex-column'>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="tweet/:id" element={<TweetDetailScreen />} />
            <Route path="user/:id" element={<UserScreen/>}/>
          </Routes> 
        </PageContent>
        
      </PageContainer>
    </UserDetailsProvider>
  );
}

export default App;
