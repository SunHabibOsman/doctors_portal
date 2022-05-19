import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../Loading';

const Dashboard = () => {
  const [user] = useAuthState(auth)
  console.log(user);

  const [admin, adminLoading] = useAdmin(user)
  console.log(admin);
  if (adminLoading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}

          <div>
            <h1>Dashboard</h1>
            <Outlet></Outlet>
          </div>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to={'/dashboard'}>My Appoinment</Link></li>
            <li><Link to={'/dashboard/myreview'}>My Review</Link></li>
            <li><Link to={'/dashboard/myhistory'}>My History</Link></li>

            {admin && <li><Link to={'/dashboard/allusers'}>All Users</Link></li>}
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;