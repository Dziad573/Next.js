import { Layout } from "./components/Layout/Layout";
import globals from "./globals.css";

export const metadata = {
    title: "Project",
    description: "My project",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Layout>
                    {children}
                </Layout>
            </body>
        </html>
    );
}
