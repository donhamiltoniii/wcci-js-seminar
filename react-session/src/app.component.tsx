import React from "react";
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       posts: [],
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((parsedResponse) => {
//         this.setState({
//           posts: parsedResponse.filter((response, index) => {
//             if (index < 10) {
//               return response;
//             }
//           }),
//         });
//       });
//   }

//   render() {
//     return (
//       <div className="app">
//         <header className="header header--main">
//           <div className="container">
//             <section className="logo">
//               <h1 className="logo__image">œ</h1>
//               <h2 className="logo__subtitle">Blogging to Get Through</h2>
//             </section>
//           </div>
//         </header>
//         <main className="content content--main">
//           {this.state.posts.map((post, index) => {
//             return <div key={index}>{JSON.stringify(post)}</div>;
//           })}
//         </main>
//         <footer className="footer footer--main">
//           <small>&copy; {new Date().getFullYear()} Dondon Develops</small>
//         </footer>
//       </div>
//     );
//   }
// }

import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import MainContent from "./components/main-content/main-content.component";

const App = () => {
  const [posts, setPosts] = React.useState([]);
  const [copyright, setCopyright] = React.useState(
    `&copy; ${new Date().getFullYear()} Dondon Develops`
  );
  const [subtitle, setSubtitle] = React.useState("Blogging to Get Through");

  React.useEffect(() => {
    console.log("called");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((parsedResponse) => {
        setPosts(
          parsedResponse.filter((response: {}[], index: number) => {
            if (index < 10) {
              return response;
            }
          })
        );
      });
  }, []);

  return (
    <div className="app">
      <Header subtitle={subtitle} />
      <MainContent posts={posts} />
      <Footer copyright={copyright} />
    </div>
  );
};

export default App;
