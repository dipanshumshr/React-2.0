import { useSelector } from "react-redux";
import React from "react";
import TabContainer from "./Components/TabContainer"
import Home from "./Components/Home"
import Profile from "./Components/Profile"
import Settings from "./Components/Settings"

function AppContainer()
{
    const activeTab = useSelector(state=> state.activeTab)

    return <div>
        <TabContainer/>
        {activeTab === "homeActive" && <Home />}
        {activeTab === "profileActive" && <Profile />}
        {activeTab === "settingActive" && <Settings />}
    </div>
}

export default AppContainer