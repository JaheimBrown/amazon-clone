import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  .Slider__IconLeft {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 4px;
    left: 4px;
    width: 56px;
    height: 200px;
    cursor: pointer;

    &:focus,
    &:hover {
      outline: 1px solid black;
      box-shadow: 3px 3px 20px rgba(255, 255, 255, 0.7);
    }
  }

  .Slider__IconRight {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 56px;
    height: 200px;
    cursor: pointer;

    &:focus,
    &:hover {
      outline: 1px solid black;
      box-shadow: 3px 3px 20px rgba(255, 255, 255, 0.7);
    }
  }
`;
