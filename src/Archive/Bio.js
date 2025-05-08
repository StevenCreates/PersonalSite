import React from "react";
import styled from "styled-components";

export default function Bio() {
  const BioStyles = styled.div`
    font-family: 'Roboto', sans-serif;
    color: #333;
    background: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    
    h1 {
      margin-bottom: 20px;
      font-size: 2.5em;
    }
    
    p {
      line-height: 1.6;
    }
    
    a {
      color: #007bff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  `;
  
  return (
    <BioStyles>
       <h1>Welcome to my website</h1>
       <p>Here, you'll find a collection of my best work, from my photography portfolio, to my top blog posts and professional projects. Have a look around, and don't hesitate to get in touch if something catches your eye.</p>
       <a href="mailto:me@example.com">Contact me</a>
    </BioStyles>
  );
}