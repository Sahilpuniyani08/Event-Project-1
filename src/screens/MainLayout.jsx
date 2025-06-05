import React, { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/sideBar'
import { Outlet } from 'react-router'

const MainLayout = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('events');
    return (
        <div className="flex flex-col h-screen ">
            <Header onMenuClick={() => setSidebarOpen(true)} />

            <div className="flex-1 flex m-5 overflow-hidden lg:ml-0">
                <Sidebar
                    isOpen={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                />
                <main className="flex-1 overflow-y-auto ">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default MainLayout