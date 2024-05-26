// src/InstagramCard.js
import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import {
    InstagramCardWrapper,
    InstagramImageContainer,
    InstagramImage,
    InstagramPlaceholder,
    InstagramContent,
    InstagramFooter,
    InstagramTimeSinceUpload,
    InstagramHandle,
    InstagramViewMore
} from './styles';

const InstagramCard = ({ content, imageUrl, time, handle }) => {
    const [imageError, setImageError] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const handleError = () => {
        setImageError(true);
    };

    const timeAgo = formatDistanceToNow(new Date(time), { addSuffix: true });

    return (
        <InstagramCardWrapper>
            <InstagramImageContainer>
                {imageError ? (
                    <InstagramPlaceholder>Image not available</InstagramPlaceholder>
                ) : (
                    <InstagramImage src={imageUrl} alt="Instagram post" onError={handleError} />
                )}
            </InstagramImageContainer>
            <InstagramContent expanded={expanded}>
                {expanded ? content : `${content.substring(0, 50)}...`}
                {content.length > 50 && (
                    <InstagramViewMore onClick={() => setExpanded(!expanded)}>
                        {expanded ? 'Read less' : 'Read more'}
                    </InstagramViewMore>
                )}
            </InstagramContent>
            <InstagramFooter>
                <InstagramTimeSinceUpload>{timeAgo}</InstagramTimeSinceUpload>
                <InstagramHandle>@{handle}</InstagramHandle>
            </InstagramFooter>
        </InstagramCardWrapper>
    );
};

export default InstagramCard;
