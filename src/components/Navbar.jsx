import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <span className="font-bold text-xl">Todo App</span>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          {/* <Link to="/item" className="hover:underline">Items</Link> */}
           <Link to="/task" className="hover:underline">
            Work on Task
          </Link>
          <Link to="/input" className="hover:underline">Input</Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
