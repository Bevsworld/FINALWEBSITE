// src/App.js
import React, { useState, useEffect } from 'react';
import {
    Container,
    CardGridWrapper,
    CardGrid,
    PaginationControls,
    PaginationButton,
    PageInfo
} from './styles';
import TweetCard from './TweetCard';
import InstagramCard from './InstagramCard';
import YouTubeCard from './YouTubeCard';
import ButtonTabs from './ButtonTabs';
import Loader from './Loader';

function App() {
    const [activeTab, setActiveTab] = useState('twitter');
    const [currentPage, setCurrentPage] = useState(1);
    const [tweets, setTweets] = useState([]);
    const [instagramPosts, setInstagramPosts] = useState([]);
    const [youtubeVideos, setYoutubeVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    const cardsPerPage = 9;

    useEffect(() => {
        const fetchTweets = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://apiserver-real.onrender.com/tweets');
                const data = await response.json();
                setTweets(data);
            } catch (error) {
                console.error('Error fetching tweets:', error);
            } finally {
                setLoading(false);
            }
        };

        if (activeTab === 'twitter' && tweets.length === 0) {
            fetchTweets();
        }
    }, [activeTab, tweets.length]);

    useEffect(() => {
        const fetchInstagramPosts = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://apiserver-real.onrender.com/igposts');
                const data = await response.json();
                setInstagramPosts(data.filter(post => post.type === 'Image'));
            } catch (error) {
                console.error('Error fetching Instagram posts:', error);
            } finally {
                setLoading(false);
            }
        };

        if (activeTab === 'instagram' && instagramPosts.length === 0) {
            fetchInstagramPosts();
        }
    }, [activeTab, instagramPosts.length]);

    useEffect(() => {
        const fetchYouTubeVideos = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://apiserver-real.onrender.com/ytvids');
                const data = await response.json();
                // Filter valid videos with defined links
                const validVideos = data.filter(video => video.type === 'video' && video.link);
                setYoutubeVideos(validVideos);
            } catch (error) {
                console.error('Error fetching YouTube videos:', error);
            } finally {
                setLoading(false);
            }
        };

        if (activeTab === 'youtube' && youtubeVideos.length === 0) {
            fetchYouTubeVideos();
        }
    }, [activeTab, youtubeVideos.length]);

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = {
        twitter: tweets.slice(indexOfFirstCard, indexOfLastCard),
        instagram: instagramPosts.slice(indexOfFirstCard, indexOfLastCard),
        youtube: youtubeVideos.slice(indexOfFirstCard, indexOfLastCard),
    }[activeTab];

    const totalPages = Math.ceil(
        {
            twitter: tweets.length,
            instagram: instagramPosts.length,
            youtube: youtubeVideos.length,
        }[activeTab] / cardsPerPage
    );

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <Container>
            <ButtonTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <CardGridWrapper>
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        <CardGrid>
                            {activeTab === 'twitter' &&
                                currentCards.map((tweet, index) => (
                                    <TweetCard
                                        key={index}
                                        avatar={tweet.profilepicture}
                                        handle={tweet.username}
                                        content={tweet.text}
                                        time={tweet.createdat}
                                    />
                                ))}
                            {activeTab === 'instagram' &&
                                currentCards.map((post, index) => (
                                    <InstagramCard
                                        key={index}
                                        content={post.caption}
                                        imageUrl={post.displayurl}
                                        time={post.timestamp}
                                        handle={post.ownerusername}
                                    />
                                ))}
                            {activeTab === 'youtube' &&
                                currentCards.map((video, index) => (
                                    <YouTubeCard
                                        key={index}
                                        videoUrl={video.link}
                                        title={video.title}
                                        time={video.timestamp}
                                        handle={video.channelname}
                                        profilePic={video.profilepic}
                                    />
                                ))}
                        </CardGrid>
                        <PaginationControls>
                            <PaginationButton onClick={handlePreviousPage} disabled={currentPage === 1}>
                                &laquo; Previous
                            </PaginationButton>
                            <PageInfo>
                                Page {currentPage} of {totalPages}
                            </PageInfo>
                            <PaginationButton onClick={handleNextPage} disabled={currentPage === totalPages}>
                                Next &raquo;
                            </PaginationButton>
                        </PaginationControls>
                    </>
                )}
            </CardGridWrapper>
        </Container>
    );
}

export default App;
