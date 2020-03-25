import styled from "styled-components";

export const NavContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  background-color: #343a40;
  color: white;
  line-height: 1.5;
  div {
    font-size: 1.25rem;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  padding-right: 50px;
  padding-left: 50px;
  margin-right: auto;
  margin-left: auto;
  text-align: left;
`;

export const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-right: -15px;
  margin-left: -15px;
  @media screen and (max-width: 930px) {
    flex-flow: column wrap;
  }
`;

export const Column = styled.div`
  flex: 0 0 ${props => props.size};
  max-width: ${props => props.size};
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  @media screen and (max-width: 930px) {
    max-width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  a {
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    border: 0 solid rgba(0, 0, 0, 0.125);
    color: #495057;
    text-decoration: none;
    background-color: ${({ active }) => (active ? "#dae0e5" : "#fff")};
    &:hover {
      background: #f8f9fa;
    }
    &:active {
      background: #dae0e5;
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  border-collapse: collapse;
  display: table;
  border-collapse: separate;
  border-spacing: 2px;
  border-color: grey;
  td:nth-child(1) {
    line-height: 2rem;
    vertical-align: baseline;
    padding-right: 2rem;
  }
  td:nth-child(2) {
    line-height: 1.5rem;
  }
`;
