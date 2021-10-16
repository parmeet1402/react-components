import styled from "styled-components";

export const AppStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8ebe2;
`;

export const Button = styled.button`
  background-color: ${props => (props.isSelected ? "#000" : "#ccc")};
  cursor: ${props => (props.isSelected ? "pointer" : "not-allowed")};
  border: none;
  color: #fff;
  padding: 18px 42px;
  border-radius: 18px;
  font-family: Plus Jakarta Sans Medium;
  font-size: 16px;
  margin-top: 36px;
  user-select: none;
`;

export const NotificationCard = styled.div`
  background: ${props => props.bgColor};
  border-radius: 32px;
  height: 132px;
  width: 438px;
  position: relative;
  overflow: hidden;
`;
export const NotificationImage = styled.img``;
export const NotificationImageWrapper = styled.div`
  margin-top: -32px;
  margin-left: 24px;
  position: absolute;
  z-index: 2;
`;

export const NotificationContent = styled.div`
  color: white;
  position: absolute;
  right: 40px;
  top: 0px;
  width: 244px;
  // margin-top: -40px;
  // margin-left: 120px;
`;
export const NotificationTitle = styled.h1`
  color: white;
`;
export const NotificationDescription = styled.p`
  color: white;
`;
export const NotificationIconButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
  border-radius: 50%;
`;

export const BubblesImage = styled.img`
  position: absolute;
  bottom: 0;
`;

export const RadioButtonContainer = styled.div`
  margin: 0 8px;
  cursor: pointer;

  input,
  label {
    cursor: pointer;
  }
`;
export const RadioButtonInput = styled.input`
  margin-right: 4px;
`;

export const OptionsContainer = styled.div`
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;
  margin-top: 12px;
  margin-left: -24px;

  input,
  label,
  textarea {
    width: 100%;
  }

  input,
  textarea {
    border-radius: 8px;
    padding: 14px 16px;
    border: 1px solid #ccc;
  }

  input {
    margin-bottom: 16px;
  }

  textarea {
    resize: none;
  }

  label {
    margin-bottom: 4px;
    font-size: 14px;
  }
`;
