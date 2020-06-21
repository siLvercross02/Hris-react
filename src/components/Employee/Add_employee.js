import React, { Component } from 'react';

class Add_employee extends Component {
    render() {
        return(
            <div className="container-fluid">
                <main className="adjust-top">
                    <h4 className="text-size">Add Employee</h4>
                    <div className="card shadow p-3 mt-3 mb-5">
                        <form>
                            <div className="form-row">
                                <div className="form-group input-group-sm col-md-4">
                                    <label>First Name:</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group input-group-sm col-md-4">
                                    <label>Middle Name:</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group input-group-sm col-md-4">
                                    <label>Last Name:</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="input-group-sm col-md-5">
                                    <label for="posistion">Position:</label>
                                    <input type="text" name="position" required className="form-control"/>
                                </div>
                                <div class="form-group input-group-sm col-md-4">
                                    <label for="name">Date Hired:</label>
                                    <input type="date" name="dhired" required className="form-control"/>
                                </div>
                            </div>
                            <br/>
                            <div className="form-row">
                                <div className="form-group input-group-sm col-md-1">
                                    <label for="name">Age:</label>
                                    <input type="number" name="age" required className="form-control"/>
                                </div>
                                <div className="form-group input-group-sm col-md-4">
                                    <label for="name">Gender:</label>
                                    <select name="gender" required className="form-control">
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div className="form-group input-group-sm col-md-5">
                                    <label for="name">Birthday:</label>
                                    <input type="date" name="bday" required className="form-control"/>
                                </div>
                                
                            </div>
                            <div className="form-row">
                                <div className="form-group input-group-sm col-md-10">
                                    <label for="name">Address:</label>
                                    <input type="text" name="address" required className="form-control"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="input-group-sm col-md-5">
                                    <label for="posistion">Email:</label>
                                    <input type="email" name="email" required className="form-control"/>
                                    <input type="hidden" value="Employee" name="status" className="form-control"/>
                                </div>
                            </div> 
					        <br/>
                            <div className="form-row">
                                <div className="input-group-sm col-md-5">
                                    <label for="posistion">Profile Image:</label>
                                    <input type="file" name="image" required className="form-control"/>
                                </div>
                            </div> 
                            <br/>
                            <div className="form-row">
                                <div className="form-group input-group-sm col-md-4">
                                    <label for="name">Username:</label>
                                    <input type="text" name="uname" required className="form-control"/>
                                </div>
                                <div className="form-group input-group-sm col-md-4">
                                    <label for="name">Password:</label>
                                    <input type="password" name="pass" required className="form-control"/>
                                </div>
                            </div>	
                            <div className="form-row">
                                <div className="form-group input-group-sm col-md-4">
                                    <label for="name">Status:</label>
                                    <select name="emp_stat" required className="form-control">
                                        <option value="Probationary">Probationary</option>
                                        <option value="Regular">Regular</option>
                                    </select>
                                </div>						
                            </div>	
                            <div className="form-row">
                                <div className="form-group input-group-sm col-md-4">
                                    <label for="name">Manager Level</label>
                                    <select name="mlevel" required className="form-control">
                                        <option value="No">No</option>
                                        <option value="Yes">Yes</option>
                                    </select>
                                </div>						
                            </div>
					        <br/>					
                            <div className="form-row">
                                <div className="form-group">
                                    <button type="submit" name="submit" className="btn btn-primary btn-sm rounded-pill pl-4 pr-4">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        )
    }
}

export default Add_employee;