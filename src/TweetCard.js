// src/TweetCard.js
import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import {
    TweetCardWrapper,
    TweetHeader,
    TweetAvatar,
    TweetUserInfo,
    TweetHandle,
    TweetContent,
    TweetFooter,
    TweetViewMore,
    TweetTimeSinceUpload,
} from './styles';

const TweetCard = ({ avatar, handle, content, time }) => {
    const [expanded, setExpanded] = useState(false);

    const timeAgo = formatDistanceToNow(new Date(time), { addSuffix: true });

    return (
        <TweetCardWrapper expanded={expanded}>
            <TweetHeader>
                <TweetAvatar src={avatar} alt="Avatar" />
                <TweetUserInfo>
                    <TweetHandle>@{handle}</TweetHandle>
                </TweetUserInfo>
            </TweetHeader>
            <TweetContent expanded={expanded}>
                {expanded ? content : `${content.substring(0, 120)}...`}
                {content.length > 120 && (
                    <TweetViewMore onClick={() => setExpanded(!expanded)}>
                        {expanded ? 'Read less' : 'Read more'}
                    </TweetViewMore>
                )}
            </TweetContent>
            <TweetFooter>
                <TweetTimeSinceUpload>{timeAgo}</TweetTimeSinceUpload>
            </TweetFooter>
        </TweetCardWrapper>
    );
};

export default TweetCard;
