// src/App.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TweetCard from './TweetCard';
import InstagramCard from './InstagramCard';
import ButtonTabs from './ButtonTabs';
import Loader from './Loader';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;
  padding: 20px;
`;

const CardGridWrapper = styled.div`
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

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
`;

const PaginationControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const PaginationButton = styled.button`
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
`;

const PageInfo = styled.span`
  margin: 0 10px;
`;

function App() {
    const [activeTab, setActiveTab] = useState('twitter');
    const [currentPage, setCurrentPage] = useState(1);
    const [tweets, setTweets] = useState([]);
    const [instagramPosts, setInstagramPosts] = useState([]);
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

        fetchTweets();
    }, []);

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
    }, [activeTab]);

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards =
        activeTab === 'twitter'
            ? tweets.slice(indexOfFirstCard, indexOfLastCard)
            : instagramPosts.slice(indexOfFirstCard, indexOfLastCard);

    const totalPages = Math.ceil(
        (activeTab === 'twitter' ? tweets.length : instagramPosts.length) /
        cardsPerPage
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
                            {activeTab === 'twitter'
                                ? currentCards.map((tweet, index) => (
                                    <TweetCard
                                        key={index}
                                        avatar={tweet.profilepicture}
                                        handle={tweet.username}
                                        content={tweet.text}
                                        time={tweet.createdat}
                                    />
                                ))
                                : currentCards.map((post, index) => (
                                    <InstagramCard
                                        key={index}
                                        content={post.caption}
                                        imageUrl={post.displayurl}
                                        time={post.timestamp}
                                        handle={post.ownerusername}
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
