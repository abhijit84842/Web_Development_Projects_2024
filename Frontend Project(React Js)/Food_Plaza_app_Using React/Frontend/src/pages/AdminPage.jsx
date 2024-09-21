import "../Css/admin.css";
import { Link } from "react-router-dom";
const AdminPage = () => {
  const handleLogout = async () => {
    let res = await fetch("http://localhost:3000/api/logout", {
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
    <div className="adminMainContainer">
      <h1>Welcome to Admin Panel</h1>
      <div className="logoutButton">
        <button onClick={() => handleLogout()}>Logout</button>
      </div>
      <div className="actionLink">
        <Link className="createAc" to="/admin/createac">
          Create Account
        </Link>
        <Link className="adminLogin" to="/admin/adminlogin">
          Admin Login
        </Link>
        <Link className="addFoods" to="/admin/addfoods">
          Add Foods
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;
