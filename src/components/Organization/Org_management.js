import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OrgManagement extends Component {
    render() {
        return(
            <div className="container-fluid">
                <main className="adjust-top">
                    <h4 className="text-size">Organization Management</h4>
                    <div className="card shadow p-3 mt-3 mb-5">
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover table-sm table-striped" id="myTable">
                                <thead className="thead-light">
                                    <tr>
                                        <th>Username</th>
                                        <th>Full Name</th>
                                        <th>Address</th>
                                        <th>Email</th>
                                        <th>Position</th>
                                    
                                        <th className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                
                                <tr>
                                    <td><Link to="/OrgLoad">Test</Link></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td class="text-center p-1">
                                        <a href="#" className="btn btn-info btn-circle  btn-sm">
                                            <i className="fas fa-pencil-alt"></i>
                                        </a>
                                        <a href="#" className="btn btn-danger btn-circle btn-sm">
                                            <i className="fas fa-trash"></i>
                                        </a>
                                    </td>
                                </tr>	  
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default OrgManagement;