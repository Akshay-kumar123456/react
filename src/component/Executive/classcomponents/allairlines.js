import axios from "axios";
import { Component } from "react";
import NavExecutive from "../navexe";

class AllAirline extends Component {
  constructor() {
    super();

    this.state = {
      airlines: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8081/airline/getall')
      .then(response => this.setState({
        airlines: response.data
      }))
      .catch(error => console.error("Error fetching data:", error));
  }
  handleDelete = (airlineId) => {
    axios.delete(`http://localhost:8081/airline/delete/${airlineId}`)
      .then(response => {
        // Assuming the deletion was successful, update the state to reflect the change
        if (response.status === 200) {
          this.setState(prevState => ({
            airlines: prevState.airlines.filter(airline => airline.id !== airlineId)
          }));
        }
      })
      .catch(error => console.error("Error deleting data:", error));
  };

  render() {
    return (
      
      <div className="container" >
        <h4>All Airlines</h4>
      <div className="row" style={{padding:50}}>
        {this.state.airlines.map((airline) => (
          <div key={airline.id} className="col-md-4 mb-3">
            <div className="card" style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
              <div className="card-body">
                <h2 className="card-title">{airline.name}</h2>
                <p className="card-text">Code: {airline.code}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => this.handleDelete(airline.id)}
                >
                  Remove access
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
  }
}

export default AllAirline;
