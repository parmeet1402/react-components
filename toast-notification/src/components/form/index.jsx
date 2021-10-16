import React, { useState, useEffect } from "react";

// External
import toast from "react-hot-toast";

// Components
import ToastNotification from "../toast-notification";

// Styles
import {
  Button,
  RadioButtonContainer,
  RadioButtonInput,
  OptionsContainer,
  Container,
} from "../../styles";

// Image
import questionImage from "../../images/question.png";
import successImage from "../../images/success.png";
import warningImage from "../../images/warning.png";
import failImage from "../../images/fail.png";
import greenBubbles from "../../images/green-bubbles.png";
import redBubbles from "../../images/red-bubbles.png";
import blueBubbles from "../../images/blue-bubbles.png";
import yellowBubbles from "../../images/yellow-bubbles.png";

// Constants
import {
  variants,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
} from "../toast-notification/data";

const Form = () => {
  const [currentVariant, setCurrentVariant] = useState(variants.SUCCESS);
  const [title, setTitle] = useState(DEFAULT_TITLE.SUCCESS);
  const [message, setMessage] = useState(DEFAULT_DESCRIPTION.SUCCESS);

  // change title and message when notification variant changes
  useEffect(() => {
    setTitle(DEFAULT_TITLE[currentVariant]);
    setMessage(DEFAULT_DESCRIPTION[currentVariant]);
  }, [currentVariant]);

  // show appropriate toast notification as per the variant
  const showToastNotification = () => {
    if (currentVariant === variants.SUCCESS) {
      toast.custom(t => (
        <ToastNotification
          t={t}
          icon={successImage}
          bubbleImage={greenBubbles}
          bgColor="#76bf4c"
          title={title}
          message={message}
        />
      ));
    }

    if (currentVariant === variants.QUESTION) {
      toast.custom(t => (
        <ToastNotification
          t={t}
          icon={questionImage}
          bubbleImage={blueBubbles}
          bgColor="#B8B5FF"
          title={title}
          message={message}
        />
      ));
    }

    if (currentVariant === variants.WARNING) {
      toast.custom(t => (
        <ToastNotification
          t={t}
          icon={warningImage}
          bubbleImage={yellowBubbles}
          bgColor="#FCA652"
          title={title}
          message={message}
        />
      ));
    }
    if (currentVariant === variants.FAIL) {
      toast.custom(t => (
        <ToastNotification
          t={t}
          icon={failImage}
          bubbleImage={redBubbles}
          bgColor="#F05454"
          title={title}
          message={message}
        />
      ));
    }
  };

  // handlers
  const handleVariantChange = e => {
    setCurrentVariant(e.target.name);
  };

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleMessageChange = e => {
    setMessage(e.target.value);
  };

  return (
    <>
      <OptionsContainer>
        {Object.values(variants).map(variant => (
          <RadioButtonContainer key={variant}>
            <RadioButtonInput
              type="radio"
              id={variant}
              name={variant}
              checked={currentVariant === variant}
              onChange={handleVariantChange}
            />
            <label htmlFor={variant}>{variant}</label>
          </RadioButtonContainer>
        ))}
      </OptionsContainer>
      <br />
      <Container>
        <label htmlFor="title-field">Title</label>
        <input
          id="title-field"
          type="text"
          value={title}
          onChange={handleTitleChange}
        />
        <label htmlFor="message-field">Message</label>
        <textarea
          id="message-field"
          rows="6"
          value={message}
          onChange={handleMessageChange}
        ></textarea>
      </Container>
      <Button
        isSelected={!(!title || !message)}
        onClick={showToastNotification}
      >
        Show Toast!
      </Button>
    </>
  );
};

export default Form;
