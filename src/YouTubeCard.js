// src/YouTubeCard.js
import React from 'react';
import { formatDistanceToNowStrict } from 'date-fns';
import {
    YouTubeCardWrapper,
    YouTubeProfileSection,
    YouTubeProfileInfo,
    YouTubeProfileImage,
    YouTubeProfileName,
    YouTubeTimeSection,
    YouTubeVideoContainer,
    YouTubeVideo,
    YouTubeTitle
} from './styles';

const YouTubeCard = ({ videoUrl, title, time, handle, profilePic }) => {
    const embedUrl = videoUrl.replace('watch?v=', 'embed/');
    const timeAgo = formatDistanceToNowStrict(new Date(time), { addSuffix: true });

    return (
        <YouTubeCardWrapper>
            <YouTubeProfileSection>
                <YouTubeProfileInfo>
                    <YouTubeProfileImage src={profilePic} alt="Profile" />
                    <YouTubeProfileName>@{handle}</YouTubeProfileName>
                </YouTubeProfileInfo>
                <YouTubeTimeSection>{timeAgo}</YouTubeTimeSection>
            </YouTubeProfileSection>
            <YouTubeVideoContainer>
                <YouTubeVideo
                    src={embedUrl}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></YouTubeVideo>
            </YouTubeVideoContainer>
            <YouTubeTitle>{title}</YouTubeTitle>
        </YouTubeCardWrapper>
    );
};

export default YouTubeCard;
