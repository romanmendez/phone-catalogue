import React, { useEffect, useState } from "react";
import ListItem from "../components/ListItem";
import { connect } from "react-redux";
import { getPhones } from "../redux/actions";
import DetailCard from "../components/DetailCard";
import PhoneImage from "../components/PhoneImage";
import { MainContainer, Row, Column, List } from "../styles/Styles";

const Main = ({ phones, getPhones }) => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getPhones();
  }, []);

  return (
    <MainContainer>
      <Row>
        <Column size="20%">
          <List>{phones && phones.map((phone, i) => <ListItem key={i} {...{ phone, setSelected }} />)}</List>
        </Column>
        <Column size="20%">{selected && <PhoneImage {...{ selected }} />}</Column>
        <Column size="50%">{selected && <DetailCard {...{ selected }} />}</Column>
      </Row>
    </MainContainer>
  );
};

const mapStateToProps = state => ({ phones: state.phones });
const mapDispatchToProps = dispatch => ({ getPhones: () => dispatch(getPhones()) });

export default connect(mapStateToProps, mapDispatchToProps)(Main);
