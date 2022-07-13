import { useState, useEffect } from 'react';
import axios from 'axios';
//import styles from './Search.module.css'

const Search = props => {
  const [searchWord, setSearchWord] = useState('programing');

  const [result, setResult] = useState([]);
  console.log(result);

  const searchWordHandler = e => {
    setSearchWord(e.target.value);
  };

  useEffect(() => {
    const getAPI = async function () {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: searchWord,
        },
      });
      setResult(data.query.search);
    };

    if (searchWord && !result.length) {
      getAPI();
    } else {
      const timer = setTimeout(() => {
        if (searchWord) {
          getAPI();
        }
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [searchWord]);

  const renderedResults = result.map(item => {
    return (
      <div key={item.pageid} className="item">
        <div className="right floated content">
          <a
            href={`http://en.wikipedia.org?curid=${item.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{item.title}</div>
        </div>
        <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={searchWord}
            onChange={searchWordHandler}
            className="input"
            type="text"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};
export default Search;
