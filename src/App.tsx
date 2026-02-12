import Layout from "@/components/Layout";
import ProgressNav from "@/components/ProgressNav";
import Sections from "@/components/Sections";
import Sidebar from "@/components/Sidebar";
import TwoColumns from "@/components/TwoColumnLayout";
import { ActiveSectionProvider } from "@/context/ActiveSectionContext";

export default function App() {
  return (
    <ActiveSectionProvider>
      <Layout>
        <ProgressNav />
        <TwoColumns firstColumn={<Sidebar />} secondColumn={<Sections />} />
      </Layout>
    </ActiveSectionProvider>
  );
}
