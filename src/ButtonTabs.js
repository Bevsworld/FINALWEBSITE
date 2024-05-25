// src/ButtonTabs.js
import React from 'react';
import { TabsContainer, TabButton } from './styles';

const ButtonTabs = ({ activeTab, setActiveTab }) => {
    return (
        <TabsContainer>
            <TabButton active={activeTab === 'twitter'} onClick={() => setActiveTab('twitter')}>
                Twitter
            </TabButton>
            <TabButton active={activeTab === 'instagram'} onClick={() => setActiveTab('instagram')}>
                Instagram
            </TabButton>
            <TabButton active={activeTab === 'youtube'} onClick={() => setActiveTab('youtube')}>
                YouTube
            </TabButton>
        </TabsContainer>
    );
};

export default ButtonTabs;
