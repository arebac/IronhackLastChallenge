import { useState ,useEffect } from "react";
import "./App.css";
import Spinner from 'react-bootstrap/Spinner';
import MyNavbar from "../components/MyNavbar";
import { useNavigate } from 'react-router-dom';
import PhoneDetails from "../pages/PhoneDetails";
import Home from "../pages/Home";
import axios from 'axios';


function App() {

  const [phonesList, setPhonesList] = useState([])
  const [fetchingPhones, setFetchingPhones] = useState(true)

  const navigate = useNavigate();

  useEffect(() => {
    getPhonesList()
  },[])

  const getPhonesList = async () => {
    try {
      const response= await axios.get(`${process.env.REACT_APP_SERVEL_URL}/phones`)

      setTimeout(() => {
        setPhonesList(response.data)
        setFetchingPhones(false)
      }, 1000)
    }catch (error){
      navigate("/error")
    }
  }

  if (fetchingPhones){
    return(
      <div className="App">
        <Spinner animation="border" variant="info"/>
      </div>
    )
  }
  

  return (
    <div className="App">
      <MyNavbar phonesList={phonesList} />

      <div id="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/phone-details/:phoneId"
            element={<PhoneDetails phoneList={phonesList} />}
          />
          <Route path="/error" element={<Error />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
