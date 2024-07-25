import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <section style={{ minHeight: "100vh" }}>
            <Outlet />
        </section>
    )
}


export default MainLayout