import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './header/Header'
import Article from './article/Article'
import Footer from './footer/Footer'

class App extends Component {


  state = {
    sourceFilter: null,
    sources: [],
    articles: []
  };

  componentDidMount() {
      this.fetchData();
  }

  async fetchData() {
      const url = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=9041cc957f4940d2920bc3dc4c6a880d&pageSize=2&page=1';
      try {
          const {data:{articles}} = await axios.get(url);
          const sources = articles.map(article => article.source.name);

          this.setState({
              articles: this.state.articles.concat(articles),
              sources
          });
      } catch (err) {
          console.log(err)
      }
  }

  render() {
    const {articles, sources} = this.state;

    return (
      <div className="App">
        <Header title="News" sources={sources} />
          {articles.map(article => <Article key={article.source.name} {...article}/>)}
        <Footer />
      </div>
    );
  }
}

export default App;
