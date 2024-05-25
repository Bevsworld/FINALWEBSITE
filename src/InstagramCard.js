// src/InstagramCard.js
import React, { useState } from 'react';
import { Card, ImageContainer, Image, Placeholder, Content, Footer } from './styles';

const InstagramCard = ({ content, imageUrl, time, handle }) => {
    const [imageError, setImageError] = useState(false);

    const handleError = () => {
        setImageError(true);
    };

    return (
        <Card>
            <ImageContainer>
                {imageError ? (
                    <Placeholder>Image not available</Placeholder>
                ) : (
                    <Image src={imageUrl} alt="Instagram post" onError={handleError} />
                )}
            </ImageContainer>
            <Content>{content}</Content>
            <Footer>
                <span>{time}</span>
                <span>@{handle}</span>
            </Footer>
        </Card>
    );
};

export default InstagramCard;
