import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export const Header = () => {
    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <Logo />
                            <Navigation />
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};