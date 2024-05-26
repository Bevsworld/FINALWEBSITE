// src/YouTubeCard.js
import React from 'react';
import { formatDistanceToNowStrict } from 'date-fns';
import {
    Card,
    VideoContainer,
    Video,
    Title,
    ProfileSection,
    ProfileInfo,
    TimeSection,
    ProfileImage,
    ProfileName
} from './styles';

const YouTubeCard = ({ videoUrl, title, time, handle, profilePic }) => {
    // Check if videoUrl is defined and includes 'watch?v='
    const embedUrl = videoUrl && videoUrl.includes('watch?v=') ? videoUrl.replace('watch?v=', 'embed/') : videoUrl;

    // Check if time is defined and format it
    const timeAgo = time ? formatDistanceToNowStrict(new Date(time), { addSuffix: true }) : 'Unknown time';

    return (
        <Card>
            <ProfileSection>
                <ProfileInfo>
                    <ProfileImage src={profilePic || 'default_profile_pic_url.jpg'} alt="Profile" />
                    <ProfileName>@{handle || 'Unknown User'}</ProfileName>
                </ProfileInfo>
                <TimeSection>{timeAgo}</TimeSection>
            </ProfileSection>
            <VideoContainer>
                {embedUrl ? (
                    <Video src={embedUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Video>
                ) : (
                    <div>Error: Invalid video URL</div>
                )}
            </VideoContainer>
            <Title>{title || 'Untitled Video'}</Title>
        </Card>
    );
};

export default YouTubeCard;
