import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const ImageContainer = styled.div`
  width: 100%;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6c757d;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Placeholder = styled.div`
  width: 100%;
  height: 150px;
  background-color: #6c757d;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.2em;
`;

const Content = styled.p`
  margin: 10px 0 0;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  color: grey;
  align-items: center;
`;

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
