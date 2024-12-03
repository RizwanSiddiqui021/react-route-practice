import { useNavigate } from "react-router-dom";
const User = ({ user }) => {
  const { id, name, email, phone } = user;

  const navigate = useNavigate();
  const handleDetails = () => {
    navigate(`/user/${id}`);
  };

  return (
    <div className="border-2 border-sky-500 rounded-lg mb-6 p-6">
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
      {/* <Link to={`/user/${id}`}>Show Details</Link> */}
      <button className="bg-sky-200" onClick={handleDetails}>
        Details
      </button>
    </div>
  );
};

export default User;
