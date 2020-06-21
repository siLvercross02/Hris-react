import React from 'react'; 
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar-adjust">
            <div className="sidebar pt-5">
                <Link to="/" className="nav-link link" id="e-records"><i className="far fa-clock mr-2"></i><span id="e-dash">Employee Records</span></Link>
                <Link to="/OrgManagement" className="nav-link link" id="o-records"><i className="far fa-clock mr-2"></i><span id="o-dash">Organization Management</span></Link>
                <Link to="/LeaveRecords" className="nav-link link" id="link1"><i className="fas fa-users mr-2" ></i><span id="leave-dash">Leave Records</span></Link>
                <Link to="/OvertimeRecords" className="nav-link link" id="link1"><i className="fas fa-users mr-2" ></i><span id="leave-dash">Overtime Record</span></Link>
                {/* <a href="#" className="nav-link link" id="e-records"><i className="far fa-clock mr-2"></i><span id="e-dash">Employee Records</span></a>
                <a href="#" className="nav-link link" id="o-records"><i className="far fa-clock mr-2"></i><span id="o-dash">Org Management</span></a> */}
                {/* <a href="#" className="nav-link link" id="link1"><i className="fas fa-users mr-2" ></i><span id="leave-dash">Leave Records</span></a> */}
                {/* <a href="overtime-records.php" className="nav-link link" id="link2"><i className="far fa-hourglass mr-2"></i><span id="overtime-dash">Overtime Records</span></a> */}

                <a href="#collapseSub" className="nav-link link" id="link4" data-toggle="collapse" aria-expanded="false" aria-controls="collapseSub" onclick="toggleSub()"><i className="far fa-chart-bar mr-2"></i><span id="report">Reports<i className="fas fa-chevron-right arrow" id="right-arrow"></i><i className="fas fa-chevron-down arrow d-none" id="arrow-down"></i></span></a>

                <div className="collapse" id="collapseSub">
                    <a href="leave-balances.php" className="nav-link link trans ml-3" id="leave-balances"><i className="fas fa-plane mr-2"></i><span id="balance-dash">Leave Balances</span></a>
                </div>
                <a href="#" className="nav-link link" id="logout"><i className="far fa-hourglass mr-2"></i><span id="log-dash">Log out</span></a>
                <hr className="divider"/>
                <div className="text-center">
                    <a className="rounded-circle f-size" href="#" id="toggleLeft" onclick="toggleSlide()"><i className="fas fa-chevron-circle-left"></i></a>
                    <a className="rounded-circle f-size d-none" href="#" id="toggleRight" onclick="toggle()"><i className="fas fa-chevron-circle-right"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;