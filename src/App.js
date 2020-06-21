import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// Image

//Partials
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
// Pages
import EmployeeRecords from './components/Records/Employee_records';
import OrgManagement from './components/Organization/Org_management';
import LeaveRecords from './components/Leave/Leave_records';
import OvertimeRecords from './components/Overtime/Overtime_records';
import AddEmployee from './components/Employee/Add_employee';
import EditEmployee from './components/Employee/Edit_employee';
import OrgLoad from './components/Organization/Org_load';

const App = () => {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Switch>
        {/* Actions */}
        <Route path="/OrgLoad" exact strict component={OrgLoad}>
          <OrgLoad />
        </Route>

        <Route path="/EditEmployee" exact strict component={EditEmployee}>
          <EditEmployee />
        </Route>

        <Route path="/AddEmployee" exact strict component={AddEmployee}>
          <AddEmployee />
        </Route>

        <Route path="/OvertimeRecords" exact strict component={OvertimeRecords}>
          <OvertimeRecords />
        </Route>

        <Route path="/OrgManagement" exact strict component={OrgManagement}>
          <OrgManagement />
        </Route>

        <Route path="/LeaveRecords" exact strict component={LeaveRecords}>
          <LeaveRecords />
        </Route>

        <Route path="/" exact strict component={EmployeeRecords}>
          <EmployeeRecords />
        </Route>
      </Switch>
    </Router>
    
  )
}

export default App;
