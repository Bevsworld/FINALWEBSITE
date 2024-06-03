// src/styles.js
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background-color: #f0f0f0;
    padding: 20px;
`;

export const CardGridWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    padding: 20px;
`;

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    width: 100%;
`;

export const PaginationControls = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
`;

export const PaginationButton = styled.button`
    background-color: #f0f0f0;
    color: #007bff;
    border: 1px solid #007bff;
    padding: 10px 20px;
    margin: 0 5px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #007bff;
        color: #fff;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;

export const PageInfo = styled.span`
    margin: 0 10px;
`;

export const TabsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

export const TabButton = styled.button`
    background-color: ${props => (props.active ? '#0056b3' : '#007bff')};
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 0 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;

    &:hover {
        background-color: #0056b3;
    }

    &:focus {
        outline: none;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    position: relative;
    transition: transform 0.3s;
    max-width: 300px;

    &:hover {
        transform: translateY(-10px);
    }
`;

export const ImageContainer = styled.div`
    width: 100%;
    border-radius: 8px 8px 0 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6c757d;
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;

export const Placeholder = styled.div`
    width: 100%;
    height: 150px;
    background-color: #6c757d;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.2em;
`;

export const Content = styled.div`
    margin: 10px 0;
    max-height: ${props => (props.expanded ? 'none' : '100px')}; // Adjusted max-height
    overflow: hidden;
    text-align: center;
    position: relative;
    width: 100%;
    padding-bottom: 10px; // Added padding-bottom
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    color: grey;
    align-items: center;
    width: 100%;
    padding: 10px 0;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
`;

export const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
`;

export const Handle = styled.span`
    color: grey;
    font-weight: bold;
    font-size: 1em;
`;

export const ViewMore = styled.span`
    color: #007bff;
    cursor: pointer;
    display: inline-block;
    margin-left: 5px;
`;

export const VideoContainer = styled.div`
    width: 100%;
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    background-color: #000;
    border-radius: 8px;
    overflow: hidden;
`;

export const Video = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const Title = styled.h3`
    margin: 10px 0 0;
    text-align: center;
`;

export const ProfileSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
`;

export const ProfileInfo = styled.div`
    display: flex;
    align-items: center;
`;

export const TimeSection = styled.span`
    color: grey;
`;

export const ProfileImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
`;

export const ProfileName = styled.span`
    font-weight: bold;
`;

export const TimeSinceUpload = styled.span`
    font-size: 0.9em;
    color: grey;
`;

export const InstagramHandle = styled.span`
    font-size: 0.9em;
    color: grey;
`;
