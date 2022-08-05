import { AboutSection } from "./components/AboutSection";
import { AdTemplate } from "./components/AdTemplate";
import { Footer } from "./components/Footer";
import { PagesList } from "./components/PagesList";
import { Sidebar } from "./components/Sidebar";
import { TopMenu } from "./components/TopMenu";

function App() {
  let pageContentClass = "w3-main w3-content w3-padding"
  let pageContentStyle = "max-width:1200px;margin-top:100px"
  return (
    <div>
      <Sidebar />
      <TopMenu />
      <div className={pageContentClass} style={pageContentStyle}>
        <AdTemplate />
        <AdTemplate />
        <AdTemplate />
        <AdTemplate />
        <PagesList />
        <AboutSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
