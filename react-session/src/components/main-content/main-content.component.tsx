import React from "react";

interface MainContentProps {
  posts: {}[];
}

const MainContent: React.FC<MainContentProps> = ({ posts }) => {
  return (
    <main className="content content--main">
      {posts.map((post, index) => {
        return <div key={index}>{JSON.stringify(post)}</div>;
      })}
    </main>
  );
};

export default MainContent;
