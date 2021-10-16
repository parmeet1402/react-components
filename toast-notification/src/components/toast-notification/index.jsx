import React from "react";
// External
import toast from "react-hot-toast";

// Components
import CustomIcon from "../custom-icon";

// Styles
import {
  NotificationCard,
  NotificationImage,
  NotificationImageWrapper,
  NotificationContent,
  NotificationTitle,
  NotificationDescription,
  NotificationIconButton,
  BubblesImage,
} from "../../styles";

const ToastNotification = ({
  t,
  bgColor,
  icon,
  bubbleImage,
  title,
  message,
}) => {
  // handlers
  const handleDismiss = () => {
    toast.dismiss(t.id);
  };

  return (
    <>
      <NotificationImageWrapper>
        <NotificationImage src={icon} alt="" role="presentation" />
      </NotificationImageWrapper>
      <NotificationCard bgColor={bgColor}>
        <BubblesImage src={bubbleImage} alt="" role="presentation" />
        <NotificationContent>
          <NotificationTitle>{title}</NotificationTitle>
          <NotificationDescription>{message}</NotificationDescription>
        </NotificationContent>
        <NotificationIconButton onClick={handleDismiss}>
          <CustomIcon icon="times" />
        </NotificationIconButton>
      </NotificationCard>
    </>
  );
};

export default ToastNotification;
