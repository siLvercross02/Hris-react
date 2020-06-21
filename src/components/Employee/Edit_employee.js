import React, { Component } from 'react';

class Edit_employee extends Component {
    render() {
        return(
            <div className="container-fluid">
                <main className="adjust-top" id="main">
                    <h4 className="text-size">Edit Employee</h4>
                    <div className="card shadow p-3 mt-3 mb-5">
                        <form method="post" enctype="multipart/form-data">
                            <div className="form-row">
                                <div className="form-group input-group-sm col-md-4">
                                    <label for="name">First Name:</label>
                                    <input type="text" name="fname" required className="form-control"/>
                                </div>
                                <div className="form-group input-group-sm col-md-4">
                                    <label for="name">Middle Name:</label>
                                    <input type="text" name="mname" required className="form-control"/>
                                </div>
                                <div className="form-group input-group-sm col-md-4">
                                    <label for="name">Last Name:</label>
                                    <input type="text" name="lname"  required className="form-control"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="input-group-sm col-md-5">
                                    <label for="posistion">Position:</label>
                                    <input type="text" name="position"  required className="form-control"/>
                                </div>
                                <div className="form-group input-group-sm col-md-4">
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
                                        <option value="">Choose</option>
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
                                <div class="form-group input-group-sm col-md-10">
                                    <label for="name">Address:</label>
                                    <input type="text" name="address" required className="form-control"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="input-group-sm col-md-5">
                                    <label for="posistion">Email:</label>
                                    <input type="email" name="email" required className="form-control"/>
                                    <input type="hidden" value="Employee" name="status" className="form-control"/>
                                    <input type="hidden" name="tid" className="form-control"/>
                                </div>
                            </div> 
                            <br/>
                            <div className="form-row">
                                <div className="input-group-sm col-md-5">
                                    <label for="posistion">Profile Image:</label>
                                    <br/>
                                    <image class="profile-img" src=""/>
                                    <input type="hidden" value="<?php echo $image; ?>" name="old_c_image"/>
                                    <br/>
                                    <input type="file" name="image" className="form-control"/>
                                </div>
                            </div> 
                            <div className="form-row">
                                <div className="form-group input-group-sm col-md-4">
                                    <label for="name">Username:</label>
                                    <input type="text" name="uname" required className="form-control"/>
                                </div>
                            </div>	
                            <div className="form-row">
                                <div className="form-group input-group-sm col-md-4">
                                    <label for="name">Status:</label>
                                    <select name="emp_stat" required className="form-control">
                                        <option value="">Choose</option>
                                        <option value="Probationary">Probationary</option>
                                        <option value="Regular">Regular</option>
                                    </select>
                                </div>						
                            </div>	
                            <div className="form-row">
                                <div className="form-group input-group-sm col-md-4">
                                    <label for="name">Manager Level</label>
                                    <select name="mlevel" required className="form-control">
                                        <option value=""></option>
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

export default Edit_employee;