import React, { useEffect, useState } from "react";
import ListItem from "../components/ListItem";
import { connect } from "react-redux";
import { getPhones } from "../redux/actions";
import DetailCard from "../components/DetailCard";
import PhoneImage from "../components/PhoneImage";
<<<<<<< HEAD
import { MainContainer, Row, Column, List } from "../styles/Components";
=======
>>>>>>> ac53ab482c84ab9e077b8aab74d97aa1df4a2893
import Loading from "../components/Loading";

const Main = ({ loading, phones, getPhones }) => {
  const [selected, setSelected] = useState(null);
  console.log("LOADING", loading);
  if (loading) console.log("Loading...");

  useEffect(() => {
    getPhones();
  }, []);
<<<<<<< HEAD
=======

>>>>>>> ac53ab482c84ab9e077b8aab74d97aa1df4a2893
  if (loading) {
    return <Loading />;
  } else {
    return (
<<<<<<< HEAD
      <MainContainer>
        <Row>
          <Column size="25%">
            <List>{phones && phones.map((phone, i) => <ListItem key={i} {...{ phone, setSelected }} />)}</List>
          </Column>
          <Column size="25%">{selected && <PhoneImage {...{ selected }} />}</Column>
          <Column size="50%">{selected && <DetailCard {...{ selected }} />}</Column>
        </Row>
      </MainContainer>
=======
      <div className="container">
        <div className="row">
          <div className="col-3" style={{ maxHeight: "90vh", overflow: "scroll" }}>
            <div className="list-group list-group-flush">
              {phones.map((phone, i) => (
                <ListItem key={i} {...{ phone, setSelected }} />
              ))}
            </div>
          </div>
          <div className="col">{selected && <PhoneImage {...{ selected }} />}</div>
          <div className="col-6">{selected && <DetailCard {...{ selected }} />}</div>
        </div>
      </div>
>>>>>>> ac53ab482c84ab9e077b8aab74d97aa1df4a2893
    );
  }
};

const mapStateToProps = state => ({ phones: state.phones, loading: state.loading });
const mapDispatchToProps = dispatch => ({ getPhones: () => dispatch(getPhones()) });

export default connect(mapStateToProps, mapDispatchToProps)(Main);
