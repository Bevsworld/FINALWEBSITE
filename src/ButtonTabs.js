// src/ButtonTabs.js
import React from 'react';
import styled from 'styled-components';

const TabsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

const TabButton = styled.button`
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

const ButtonTabs = ({ activeTab, setActiveTab }) => {
    return (
        <TabsContainer>
            <TabButton active={activeTab === 'twitter'} onClick={() => setActiveTab('twitter')}>
                Twitter
            </TabButton>
            <TabButton active={activeTab === 'instagram'} onClick={() => setActiveTab('instagram')}>
                Instagram
            </TabButton>
        </TabsContainer>
    );
};

export default ButtonTabs;
