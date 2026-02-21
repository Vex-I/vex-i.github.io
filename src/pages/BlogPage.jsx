import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import React from "react";
import { fetchContent } from "../functions/fetchContent"
import { LoadingOutlined } from "@ant-design/icons"
import { Spin, Empty, Flex, Divider} from "antd"
import { marked } from "marked";
import NotFound from "./NotFound"

//TODO: Include a TOC sidebar
export default function BlogPost() {
    const { slug } = useParams();
    const [content, setContent] = React.useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchContent(slug, setContent, setError, setIsLoading);
    }, []);

    if(isLoading) {
        return(
        <article className="blog-container">
            <div style={{margin:'0 auto'}}>
                <Spin indicator={<LoadingOutlined spin />} size="large"/>   
            </div>
        </article>
        )
    }


    if(error) {
        return (
            <article className="blog-container">
                <Empty description={error}></Empty>
            </article>
        )
    }
    
    let contentHTML = "";
    // TODO: Sanitize the HTML, just in case.

    try{
        contentHTML = marked.parse(content[0].markdown);
    } catch(err) {
        return(<NotFound/>);
    }

    return (
        <article className="blog-container">
            <section>
            <h1>{content[0].title}</h1>
            <p className="text-subheading">Last updated: {new Date(content[0].updatedAt).toDateString()}</p>
            <Divider/>
            <div className="markdown-body" dangerouslySetInnerHTML={{__html: contentHTML}}/>
            </section>
        </article>
    );
}
