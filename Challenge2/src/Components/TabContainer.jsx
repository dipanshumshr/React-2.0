// Challenge 3: Toggle Multiple Tabs
// Problem:

// Create a TabContainer component that renders 3 tabs: "Home", "Profile", "Settings".

// Each tab should maintain its own state (e.g., input field value, checkbox state).

// When you switch tabs, the state of each tab should persist independently.

// Hint: Consider using an object structure to maintain state for each tab.

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeVisibility } from "../features/Tab/TabSlice";

function TabContainer()
{
    const dispatch = useDispatch();
    const activeTab = useSelector(state => state.activeTab)

    function handleTab(tabName)
    {
        dispatch(changeVisibility(tabName))
    }

    return <div>
        <button style={{backgroundColor: activeTab === "homeActive" ?  "#007bff" : "#2A4759"}} onClick={()=>{ handleTab("homeActive")}}>Home</button>
        <button style={{backgroundColor: activeTab === "profileActive" ?  "#007bff" : "#2A4759"}} onClick={()=>{ handleTab("profileActive")}}>Profile</button>
        <button style={{backgroundColor: activeTab === "settingActive" ?  "#007bff" : "#2A4759"}} onClick={()=>{ handleTab("settingActive")}}>Setting</button>
    </div>
}

export default TabContainer;