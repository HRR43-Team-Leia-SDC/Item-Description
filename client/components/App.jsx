/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';
import Item from './Item';
import Details from './Details';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    this.getDbData((dbData) => {
      this.setState({
        data: dbData,
      });
    });
  }

  getDbData(cb) {
  // const queryString = window.location.search;
    // const id = queryString.slice(1);
    const id = 1;
    axios.get(`/${id}`)
      .then((data) => {
        cb(data.data);
      });
  }

  render() {
    const { data } = this.state;
    const doc = data;
    return (
      <div>
        <div>
          <Item
            className="item"
            sellerName={doc.sellerName}
            itemDesc={doc.itemDescription}
            itemPrice={doc.itemPrice}
          />
        </div>
        <div>
          <p>---------------------------------</p>
        </div>
        <div>
          <Details
            className="details"
          />
        </div>
      </div>
    );
  }
}

export default App;
