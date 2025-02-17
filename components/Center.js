import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 1200px;

  margin-right: auto ;
  margin-left: auto ;
 

  padding: 0 20px;
`;

export default function Center({children}) {
  return (
    <StyledDiv>{children}</StyledDiv>
  );
}