import React, { Component } from 'react';

class Org_load extends Component {
    render() {
        return(
            <div className="container-fluid">
                <main className="adjust-top" id="main">
                    <h4 className="text-size">Team Management: <font color ="red">Test</font></h4>
                    <div className="row">
                        <div className="col-md-6">
                            <a href="#" data-toggle="modal" data-target="#add_modal" className="btn btn-sm btn-success rounded-pill pl-5 pr-5">Assign Employee</a>
                        </div> 
                    </div>
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
                                        <td><a href="employee_records_details.php?id=<?php echo $row['id'];?>"></a></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td className="text-center">
                                            <a href="#" onClick="return confirm('Are you sure you want to unassign this employee?')" className="btn btn-danger btn-circle btn-sm">
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

export default Org_load;
