import { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = props => {
  const language = 'ko';
  const [tranText, setTranText] = useState('');
  const [text, setText] = useState('');

  const textHandler = e => {
    e.preventDefault();

    setText(e.target.value);
  };

  useEffect(() => {
    const trans = async function () {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: text,
            target: language,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        }
      );

      setTranText(data.data.translations[0].translatedText);
    };

    trans();
  }, [text]);

  return (
    <div>
      <div>
        <form>
          <input type="text" onChange={textHandler} value={text} />
        </form>
      </div>

      {tranText}
    </div>
  );
};
export default Convert;
