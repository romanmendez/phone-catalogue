import React, { useEffect, useState } from "react";
import ListItem from "../components/ListItem";
import { connect } from "react-redux";
import { getPhones } from "../redux/actions";
import DetailCard from "../components/DetailCard";
import PhoneImage from "../components/PhoneImage";
import { MainContainer, Row, Column, List } from "../styles/Components";
import Loading from "../components/Loading";

const Main = ({ loading, phones, getPhones }) => {
  const [selected, setSelected] = useState(null);
  console.log("LOADING", loading);
  if (loading) console.log("Loading...");

  useEffect(() => {
    getPhones();
  }, []);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <MainContainer>
        <Row>
          <Column size="25%">
            <List>{phones && phones.map((phone, i) => <ListItem key={i} {...{ phone, setSelected }} />)}</List>
          </Column>
          <Column size="25%">{selected && <PhoneImage {...{ selected }} />}</Column>
          <Column size="50%">{selected && <DetailCard {...{ selected }} />}</Column>
        </Row>
      </MainContainer>
    );
  }
};

const mapStateToProps = state => ({ phones: state.phones, loading: state.loading });
const mapDispatchToProps = dispatch => ({ getPhones: () => dispatch(getPhones()) });

export default connect(mapStateToProps, mapDispatchToProps)(Main);
