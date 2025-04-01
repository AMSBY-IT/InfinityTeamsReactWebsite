import Header from "../shared/Header";
import Sidebar from "../sidebar/Sidebar";

type Props = {
    children: React.ReactNode;
    pageTitle: string;
};

export default function ProfileContainer({ pageTitle, children }: Props) {
    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header title={pageTitle} />
                <main className="flex-1 overflow-auto p-6">
                    <div className="space-y-8">{children}</div>
                </main>
            </div>
        </div>
    );
}
