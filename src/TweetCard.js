// src/TweetCard.js
import React, { useState } from 'react';
import { Card, Header, Avatar, UserInfo, Handle, Content, Footer, ViewMore } from './styles';

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
