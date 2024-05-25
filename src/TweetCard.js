// src/TweetCard.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 300px;
  max-height: ${props => (props.expanded ? 'none' : '200px')};
  transition: max-height 0.3s ease;
  overflow: hidden;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Handle = styled.span`
  color: grey;
`;

const Content = styled.p`
  margin: 10px 0;
  flex: 1;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: grey;
  position: absolute;
  bottom: 10px;
  width: calc(100% - 40px); /* Adjust based on padding */
`;

const ViewMore = styled.span`
  color: #007bff;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const TweetCard = ({ avatar, handle, content, time }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card expanded={expanded}>
            <Header>
                <Avatar src={avatar} alt="Avatar" />
                <UserInfo>
                    <Handle>@{handle}</Handle>
                </UserInfo>
            </Header>
            <Content>
                {expanded ? content : content.substring(0, 120)}
                {content.length > 120 && !expanded && '...'}
            </Content>
            <Footer>
                <span>{time}</span>
            </Footer>
            {content.length > 120 && (
                <ViewMore onClick={() => setExpanded(!expanded)}>
                    {expanded ? 'View less' : 'View more'}
                </ViewMore>
            )}
        </Card>
    );
};

export default TweetCard;
