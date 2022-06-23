import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, } from '@mui/material/styles';
//Pages
import Layout from "./Layout"
import Home from "./components/home/Home";
import Clients from "./components/orderPage/Order";
import OrderComplete from "./components/orderPage/OrderComplete";
import MessageSent from "./components/contact/MessageSent";
import AboutUs from "./components/aboutUs/AboutUs";
import Staff from "./components/staff/Staff";
import Contact from "./components/contact/Contact";
import customTheme from "./theme.jsx"

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="clients" element={<Clients />} />
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="staff" element={<Staff sx={{backgroundColor:"primary.light"}} />} />
            <Route path="contact" element={<Contact />} />
            <Route path="orderComplete" element={<OrderComplete />} />
            <Route path="messageSent" element={<MessageSent />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
