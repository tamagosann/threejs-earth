import styled from "styled-components";

const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #1756dd32;
  dispkay: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 13%;
  z-index: 99;
  text-align: center;
`;

const Logo = styled.h1`
  margin: 0;

  color: #fff;
  font-weight: 800;
  font-size: 80px;
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  margin-top: 1em;
`;

export const TopSection = () => {
  return (
    <TopSectionContainer>
      <Logo>Global warming</Logo>
      <Slogan>Keep it cool for safe living.</Slogan>
    </TopSectionContainer>
  );
};
