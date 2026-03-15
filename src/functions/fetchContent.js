export const fetchProjects = async (setProjects, setError, setIsLoading) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BE_URI}/content?type=project`);

        if (!response.ok) {
            throw new Error(`${response.status} : ${response.statusText}`);
        }
        const data = await response.json();
        setProjects(data);
        setError(null);
    } catch (err) {
        setError(err.message);
        setProjects([]);
    } finally {
        setIsLoading(false);
    }
};

export const fetchPosts = async (setPosts, setError, setIsLoading) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BE_URI}/content?type=blog`);
        if (!response.ok) {
            throw new Error(`${response.status} : ${response.statusText}`);
        }
        const data = await response.json();
        setPosts(data);
        setError(null);
    } catch (err) {
        setError(err.message);
        setPosts([]);
    } finally {
        setIsLoading(false);
    }
};

export const fetchWikiPosts = async (setPosts, setError, setIsLoading) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BE_URI}/content?type=wiki-post`);
        if (!response.ok) {
            throw new Error(`${response.status} : ${response.statusText}`);
        }
        const data = await response.json();
        setPosts(data);
        setError(null);
    } catch (err) {
        setError(err.message);
        setPosts([]);
    } finally {
        setIsLoading(false);
    }
};

export const fetchContent = async (slug, setContent, setError, setIsLoading) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BE_URI}/content?slug=${slug}`);
        if(!response.ok) {
            throw new Error(`${response.status} : ${response.statusText}`);
        }

        const data = await response.json();
        setContent(data[0]);
        setError(null);
    } catch(err) {
        setError(err.message);
    } finally {
        setIsLoading(false);
    }

}


