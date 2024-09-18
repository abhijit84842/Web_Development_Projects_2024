import "../Css/admin.css";
import { Link } from "react-router-dom";
const AdminPage = () => {
  return (
    <div className="adminMainContainer">
      <h1>Welcome to Admin Panel</h1>
      <div className="actionLink">
        <Link className="createAc" to="/createac">
          Create Account
        </Link>
        <Link className="adminLogin" to="/admin/adminlogin">
          Admin Login
        </Link>
        <Link className="addFoods" to="/addfoods">
          Add Foods
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;
