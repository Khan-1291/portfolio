// src/hooks/useGitHub.js
import { useState, useEffect } from 'react';
import { excludeRepos } from  '../data/projects.js';

export const useGitHub = (username = 'khan-1291') => {
  const [repos, setRepos] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user stats
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userRes.json();

        // Fetch repositories
        const reposRes = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
        );
        const reposData = await reposRes.json();

        // Filter out excluded repos and limit to 6
        const filteredRepos = reposData
          .filter(repo => !excludeRepos.includes(repo.name) && !repo.fork)
          .slice(0, 6);

        setStats({
          publicRepos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
        });

        setRepos(filteredRepos.map(repo => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          language: repo.language,
          updatedAt: repo.updated_at,
          url: repo.html_url,
          homepage: repo.homepage,
        })));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  return { repos, stats, loading, error };
};