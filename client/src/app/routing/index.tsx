import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../shared/ui/main-layout";
import { MessagePage } from "../../pages/messages-list-page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <MessagePage />
            }
        ]
    }
]) 