import styled from "styled-components";
export const Container = styled.div`
  height: 3.125rem;
  margin-bottom: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Name = styled.div`
  width: 10rem;
  height: 3rem;
  background: #655DBB;
  color: #ECF2FF;
  font-size: 1.125rem;
  font-family: "Playfair Display";
  font-style: italic;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
 @media (max-width: 960px) {
  
    a:first-child {
      display: none;
    }
    }
  a {
    margin-left: 2.75rem;
  }
`;
