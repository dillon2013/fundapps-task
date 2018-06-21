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
    articles: [],
    page: 1
  };

  componentDidMount() {
      this.fetchData();
  }

  fetchData = async () => {

      const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=9041cc957f4940d2920bc3dc4c6a880d&pageSize=2&page=${this.state.page}`;
      try {
          const {data:{articles}} = await axios.get(url);
          const sources = articles.map(article => article.source.name);

          this.setState({
              articles: this.state.articles.concat(articles),
              sources: this.state.sources.concat(sources),
              page: this.state.page + 1
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
          {articles.map(article => <Article key={article.title + article.publishedAt} {...article}/>)}
        <Footer showMore={this.fetchData} />
      </div>
    );
  }
}

export default App;
