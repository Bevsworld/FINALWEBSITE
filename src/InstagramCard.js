// src/InstagramCard.js
import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import {
    Card,
    ImageContainer,
    Image,
    Placeholder,
    Content,
    Footer,
    TimeSinceUpload,
    InstagramHandle,
    ViewMore
} from './styles';

const InstagramCard = ({ content, imageUrl, time, handle }) => {
    const [imageError, setImageError] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const handleError = () => {
        setImageError(true);
    };

    const timeAgo = formatDistanceToNow(new Date(time), { addSuffix: true });

    return (
        <Card>
            <ImageContainer>
                {imageError ? (
                    <Placeholder>Image not available</Placeholder>
                ) : (
                    <Image src={imageUrl} alt="Instagram post" onError={handleError} />
                )}
            </ImageContainer>
            <Content expanded={expanded}>
                {expanded ? content : `${content.substring(0, 50)}...`}
                {content.length > 50 && (
                    <ViewMore onClick={() => setExpanded(!expanded)}>
                        {expanded ? 'Read less' : 'Read more'}
                    </ViewMore>
                )}
            </Content>
            <Footer>
                <TimeSinceUpload>{timeAgo}</TimeSinceUpload>
                <InstagramHandle>@{handle}</InstagramHandle>
            </Footer>
        </Card>
    );
};

export default InstagramCard;
