// import DetailComment from './components/DetailComment';
import Dropdown from './components/Dropdown';
import Search from './components/Search';

function App() {
  const options = [
    {
      label: 'The Color Red',
      value: 'red',
    },
    {
      label: 'The Color Green',
      value: 'green',
    },
    {
      label: 'The Color Blue',
      value: 'blue',
    },
  ];

  return (
    <div className="ui container comments">
      {/* <DetailComment author={'sam'} date={'6/28'} text={'good !!!'} />
      <DetailComment />
      <DetailComment /> */}
      {/* <Search /> */}
      <Dropdown options={options} />
    </div>
  );
}

export default App;
