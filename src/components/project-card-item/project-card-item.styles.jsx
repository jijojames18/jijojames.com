import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export const ContainerCol = styled(Col)`
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const CardItem = styled(Card)`
  background-color: #4e4e4e;
  &:hover {
    .list-group {
      opacity: 1;
    }
  }
`;

export const CardListGroup = styled(ListGroup)`
  position: absolute;
  bottom: 20px;
  width: 93%;
  opacity: 0;
  justify-content: center;
  flex-wrap: wrap;
`;

export const CardBodyImg = styled(Card.Img)`
  opacity: 1;
`;

export const CardListGroupItem = styled(ListGroupItem)`
  font-size: 14px;
  margin: 8px 2px;
  border-radius: 10px !important;
`;

export const CardBodyMainContent = styled(Card.Body)`
  margin-top: 0px;
  padding-top: 0px;
`;

export const CardBodyImageContainer = styled(Card.Body)`
  position: relative;
`;

export const CardBodyMainTitle = styled(Card.Title)`
  color: #fff;
  font-weight: bold;
`;

export const CardBodyMainText = styled(Card.Text)`
  text-align: justify;
`;

export const CardLink = styled(Card.Link)`
  font-size: 16px;
`;
