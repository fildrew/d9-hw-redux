import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { remCompanie } from "../redux/prefCompanies";

const Preferiti = () => {
  const preferiti = useSelector((state) => state.prefCompanies.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="ms-2">Le tue aziende preferite</h1>
      <button
        className="btn btn-primary ms-2 "
        onClick={() => {
          navigate("/");
        }}
      >
        HOME
      </button>
      <ul className="mt-2">
        {preferiti.map((item, index) => (
          <li className="mb-3" key={`id-list${index}`}>
            <button
              className="btn btn-danger me-2"
              onClick={() => {
                dispatch(remCompanie(item));
              }}
            >
              🗑️
            </button>
            <Link to={`/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Preferiti;