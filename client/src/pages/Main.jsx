import React, { useEffect, useState } from "react";
import ListItem from "../components/ListItem";
import { connect } from "react-redux";
import { getPhones } from "../redux/actions";
import DetailCard from "../components/DetailCard";
import PhoneImage from "../components/PhoneImage";
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
    );
  }
};

const mapStateToProps = state => ({ phones: state.phones, loading: state.loading });
const mapDispatchToProps = dispatch => ({ getPhones: () => dispatch(getPhones()) });

export default connect(mapStateToProps, mapDispatchToProps)(Main);
