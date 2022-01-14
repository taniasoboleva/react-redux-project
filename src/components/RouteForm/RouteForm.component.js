import React, { useState, useEffect } from "react";
import maponImg from "../../assets/mapon.svg";
import { Form, Typography, DatePicker, message, Space } from "antd";
import * as axios from "axios";
// import { MapView } from "../GoogleMap.js";
import Results from "../Results/Results.component";
import { connect } from "react-redux";
import { getList } from "../../actions/getList";
// import { formattedDate } from "../../dates";
import * as Styles from "./RouteForm.styles";

const { Text } = Typography;

const RouteForm = (props) => {
  const [form] = Form.useForm();
  const apiKey = process.env.REACT_APP_MAPON_API_KEY;
  const newList = props.listProps.list;
  const url =
    `https://mapon.com/api/v1/unit/list.json?key=${apiKey}`;
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [vehiclesList, setVehiclesList] = useState(newList);
  const [recievedObject, setRecievedObject] = useState(null);
  const [showMap, setShowMap] = useState(false);

  const onFinish = () => {
    setShowMap(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    getList();
  }, []);

  // unfortunatelly haven't mooved this logic into sepparate file
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        setRecievedObject(response.data.data.units.number);
        setVehiclesList(response.data.data.units);
        if (recievedObject) {
          vehiclesList.push(recievedObject);
        }
      });
  }, []);

  const handleStartDate = (value) => {
    message.info(
      `Started date selected: ${value ? value.format("YYYY-MM-DD") : "None"}`
    );
    setStartDate(value);
  };

  const handleEndDate = (value) => {
    message.info(
      `Ending date selected: ${value ? value.format("YYYY-MM-DD") : "None"}`
    );
    setEndDate(value);
  };

  return (
    <Styles.FormContainer>
      <Styles.Logo src={maponImg} alt="mapon-logo" />
      <Styles.StyledForm
        name="route_report_form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
        autoComplete="off"
      >
        <Styles.Title>Route report</Styles.Title>
        <Space size="32px" />
        <Styles.Container>
          <Text>Vehicle number</Text>
          <Form.Item name="select">
            <Styles.StyledSelect>
              {vehiclesList.map((item) => (
                <option key={item.id}>{item.number}</option>
              ))}
            </Styles.StyledSelect>
          </Form.Item>
        </Styles.Container>

        <Styles.Container>
          <Text>Period</Text>
          <Form.Item name="startPeriod">
            <div style={{ paddingLeft: 68 }}>
              <DatePicker
                placeholder="Choose start date"
                value={startDate}
                onChange={handleStartDate}
              />
            </div>
          </Form.Item>
          <Form.Item name="endPeriod">
            <div>
              <DatePicker
                placeholder="Choose end date"
                value={endDate}
                onChange={handleEndDate}
              />
            </div>
          </Form.Item>
        </Styles.Container>
        {showMap && (
          <>
            <Styles.MapContainer>
              {/* <MapView /> */}
            </Styles.MapContainer>
            <Results />
          </>
        )}
        <Styles.ButtonContainer>
          <Styles.ButtonPosition>
            <Styles.ButtonView
              alt="button"
              htmlType="submit"
              onClick={onFinish}
            >
              GENERATE
            </Styles.ButtonView>
          </Styles.ButtonPosition>
        </Styles.ButtonContainer>
      </Styles.StyledForm>
    </Styles.FormContainer>
  );
};
const mapStateToProps = (state) => ({
  listProps: state.lisReducer
})

export default connect(mapStateToProps, { getList })(RouteForm);
