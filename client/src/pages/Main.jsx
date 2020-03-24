import React, { useEffect, useState } from "react";
import ListItem from "../components/ListItem";
import { connect } from "react-redux";
import { getPhones } from "../redux/actions";
import DetailCard from "../components/DetailCard";
import PhoneImage from "../components/PhoneImage";

const Main = ({ phones, getPhones }) => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getPhones();
    setSelected(phones[0]);
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-3" style={{ maxHeight: "90vh", overflow: "scroll" }}>
            <div className="list-group"></div>
            {phones && phones.map((phone, i) => <ListItem key={i} {...{ phone, setSelected }} />)}
          </div>
          <div className="col">{selected && <PhoneImage {...{ selected }} />}</div>
          <div className="col-5">{selected && <DetailCard {...{ selected }} />}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ phones: state.phones });
const mapDispatchToProps = dispatch => ({ getPhones: () => dispatch(getPhones()) });

export default connect(mapStateToProps, mapDispatchToProps)(Main);