import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { rgba } from "polished";

export const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: dense;
`;

export const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  cursor: pointer;

  ${props =>
    props.isExpanded &&
    css`
      position: fixed;
      z-index: 2;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 0;
    `}
`;

export const SinglePictureContainer = styled.div`
  ${props =>
    props.variant === "wide" &&
    css`
      grid-column: span 2;
    `}

  ${props =>
    props.variant === "tall" &&
    css`
      grid-row: span 2;
    `}

  ${props =>
    props.variant === "big" &&
    css`
      grid-column: span 2;
      grid-row: span 2;
    `}
`;

export const Back = styled(motion.div)`
  position: fixed;
  top: 4px;
  left: 0px;
  z-index: 3;

  background: ${rgba("white", 0.7)};
  height: 36px;
  width: 36px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 20px;
`;

export const InfoCard = styled(motion.div)`
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  height: 120px;
  width: 80%;
  border-radius: 18px;
  padding: 22px 19px;
  box-sizing: border-box;
  z-index: 3;
`;

export const Name = styled.div`
  font-family: Plus Jakarta Sans Bold;
  font-size: 24px;
  margin-bottom: 12px;
`;

export const PhotographerName = styled.div``;

export const Location = styled.div`
  font-size: 14px;
  color: #9f9f9f;
  font-family: Plus Jakarta Sans Extra Bold;
`;

export const Avatar = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 12px;
`;
