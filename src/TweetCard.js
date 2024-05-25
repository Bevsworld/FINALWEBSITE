// src/YouTubeCard.js
import React from 'react';
import { formatDistanceToNowStrict } from 'date-fns';
import { Card, VideoContainer, Video, Title, ProfileSection, ProfileInfo, TimeSection, ProfileImage, ProfileName } from './styles';

const YouTubeCard = ({ videoUrl, title, time, handle, profilePic }) => {
    const embedUrl = videoUrl.replace('watch?v=', 'embed/');
    const timeAgo = formatDistanceToNowStrict(new Date(time), { addSuffix: true });

    return (
        <Card>
            <ProfileSection>
                <ProfileInfo>
                    <ProfileImage src={profilePic} alt="Profile" />
                    <ProfileName>@{handle}</ProfileName>
                </ProfileInfo>
                <TimeSection>{timeAgo}</TimeSection>
            </ProfileSection>
            <VideoContainer>
                <Video src={embedUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Video>
            </VideoContainer>
            <Title>{title}</Title>
        </Card>
    );
};

export default YouTubeCard;
