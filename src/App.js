import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/Topbar";
import SideBarrr from "./scenes/global/SideBarrr";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/Dashboard/Dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import FAQ from "./scenes/faq";
import Form from "./scenes/form";
import Calendar from "./scenes/calender/calender";
import Bar from "./scenes/Bar/Bar";
import PieChart from "./scenes/Pie/PieChart";
import ProgressBar from "./components/ProgressBar";
import CopyRight from "./components/CopyRight";
import Dashboardss from "./scenes/Dashboard/Dashboardss";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app" style={{ display: "flex"}}>
          <SideBarrr isSidebar={isSidebar} />
          <main className="content" style={{flex:1}}>
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboardss />} />
              {/* <Dashboardss/> */}
              {/* <Route path="/" element={<Dashboard />} /> */}
              <Route path="/team" element={<Team />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<PieChart />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
        <CopyRight/>

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
