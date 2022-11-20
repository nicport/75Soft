import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Tasks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      DataisLoaded: false
    };
  }

  componentDidMount() {
    fetch('/tasks')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        })
      })
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
      <h1>Waiting...</h1>
    </div>;
    return (
      <div className='Tasks'>
        <form>
        <h1>75 Soft</h1>
        <div className='tasklist'> 
        {
          items.map((item) => {
            return <label key={item.id}><input type="checkbox" id= {item.id}/>{item.description}<br></br></label>
          })
        }
        </div>
        </form>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Tasks />);

