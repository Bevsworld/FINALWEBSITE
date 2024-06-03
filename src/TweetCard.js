// src/TweetCard.js
import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import {
    Card,
    Header,
    Avatar,
    UserInfo,
    Handle,
    Content,
    Footer,
    ViewMore,
    TimeSinceUpload,
} from './styles';

const TweetCard = ({ avatar, handle, content, time }) => {
    const [expanded, setExpanded] = useState(false);

    const timeAgo = formatDistanceToNow(new Date(time), { addSuffix: true });

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
                <TimeSinceUpload>{timeAgo}</TimeSinceUpload>
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
