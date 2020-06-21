import React, { Component } from 'react';

class Overtime_records extends Component {
    render() {
        return(
            <div className="container-fluid">
            <main className="adjust-top">
                <h4 className="text-size">Overtime Record</h4>
                <div className="card shadow p-3 mt-3 mb-5">
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover table-sm table-striped" id="myTable">
                            <thead className="thead-light">
                            <tr>
                                <th>Full Name</th>
                                <th>Overtime Date</th>
                                <th>Total Hours</th>
                                <th>Reason</th>
                                <th>Approved By</th>
                                <th>Approved Date</th>
                            </tr>
                            </thead>
                            <tbody>     
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
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

export default Overtime_records;