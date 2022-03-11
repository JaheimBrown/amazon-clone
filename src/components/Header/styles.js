import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 60px;
  width: 100vw;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;

  .header__logo {
    width: 100px;
    object-fit: contain;
    margin: 0 20px;
    padding-top: 10px;
    cursor: pointer;
  }

  .header__search {
    display: flex;
    align-items: center;
    flex-grow: 1;
    border-radius: 24px;
  }

  .header__searchInput {
    width: 100%;
    height: 32px;
    padding-inline: 0.5em;
    outline: none;
  }

  .header__searchIcon {
    padding: 4px;
    height: 32px !important;
    width: 32px !important;
    background-color: #cd9042;
    cursor: pointer;
  }

  .header__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
  }

  .header__option {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: #fff;
    height: 50px;
    padding: 16px 8px;
    margin: 0 8px;
    cursor: pointer;

    &:hover {
      outline: 1px solid rgba(255, 255, 255, 0.3);
    }

    .header__lineOne {
      font-size: 0.8rem;
    }

    .header__lineTwo {
      font-size: 1rem;
      font-weight: bold;
    }

    &:nth-child(4) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 65px;
      .header__lineOne {
        color: #cd9042;
        font-size: 22px;
      }
    }

    .header__cartIcon {
      font-size: 30px;
    }
  }
`;
