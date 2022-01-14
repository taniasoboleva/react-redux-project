import styled from "styled-components";
import { Form, Button, Typography } from "antd";

const { Text } = Typography;

export const Logo = styled.img`
  padding-top: 26px;
  max-width: 200px;
`;

export const StyledForm = styled(Form)`
  background-color: #ffffff;
  padding: 40px 26px;
  width: 500px;
`;

export const StyledSelect = styled.select`
  width: 100%;
  height: 32px;
  border: 1px solid #dcdee0;
  box-sizing: border-box;
  border-radius: 3px;
  padding-right: 220px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled(Text)`
  font-size: 24px;
`;

export const ButtonView = styled(Button)`
  background: #98ca02;
  border-radius: 3px;
  border: 2px solid #98ca02;
  color: white;
`;

export const ButtonContainer = styled.div`
  position: relative;
  background: #f4f4f4;
  border-radius: 0px 0px 3px 3px;
  height: 64px;
`;

export const ButtonPosition = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
`;

export const MapContainer = styled.div`
  height: 300px;
`;

export const FormContainer = styled.div`
padding-top: 32px;
display: flex;
flex-direction: column;
justify-content: center;
`;
