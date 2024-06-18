import React, { useEffect } from "react";
import AuthControl from "./components/molecules/AuthControl/AuthControl";
import CalendarEvents from "./components/molecules/CalendarEvents/CalendarEvents";
import MainLayout from "./components/layouts/MainLayout/MainLayout";
import { initClient } from "./api/googleCalendarApi";

const App: React.FC = () => {
  useEffect(() => {
    initClient();
  }, []);

  return (
    <MainLayout>
      <AuthControl />
      <CalendarEvents />
    </MainLayout>
  );
};

export default App;
