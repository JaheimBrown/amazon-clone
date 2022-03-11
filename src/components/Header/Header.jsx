import { Wrapper } from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const header = () => {
  return (
    <Wrapper>
      <img
        src="https://jitsvinger.co.za/wp-content/uploads/2018/04/Amazon-Logo-1024x373.png "
        alt="Amazon Logo"
        className="header__logo"
      />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <nav className="header__nav">
        <div className="header__option">
          <span className="header__lineOne">Hello, Quest</span>
          <span className="header__lineTwo">Sign in</span>
        </div>
        <div className="header__option">
          <span className="header__lineOne">Returns</span>
          <span className="header__lineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__lineOne">Your</span>
          <span className="header__lineTwo">Prime</span>
        </div>
        <div className="header__option">
          <ShoppingCartIcon className="header__cartIcon" />
          <span className="header__lineOne">0</span>
        </div>
      </nav>
    </Wrapper>
  );
};

export default header;
