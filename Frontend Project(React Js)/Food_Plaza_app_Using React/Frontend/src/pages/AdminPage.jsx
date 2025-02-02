import "../Css/admin.css";
import { Link } from "react-router-dom";
const AdminPage = () => {
  const handleLogout = async () => {
    let res = await fetch("http://localhost:3002/api/logout", {
      credentials: "include", // include cookies in the request
    });
    let data = await res.json();
    if (data.success) {
      alert("logout successfully..");
    } else {
      alert("logout is not successfull");
    }
  };
  return (
    <div className="admin-maincontainer">
      <div className="admin-logoutbox">
        <button className="admin-logoutbutton" onClick={() => handleLogout()}>
          logout
        </button>
      </div>
      <div className="admin-sub-containers">
        <h1>Admin Dashboard</h1>
        <h2>Select an action to proceed</h2>
        <div className="button-group">
          <Link className="admin-link" to="/admin/createac">
            Create Account
          </Link>
          <Link className="admin-link" to="/admin/adminlogin">
            Admin Login
          </Link>
          <Link className="admin-link" to="/admin/addfoods">
            Add Food
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
