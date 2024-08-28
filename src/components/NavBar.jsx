import {
  UserOutlined,
  ShoppingCartOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../App.css";
export const NavBar = ({ inputValue, setInputValue }) => {
  function handleInput(e) {
    setInputValue(e.target.value);
    console.log(inputValue);
  }
  return (
    <>
      <div className="navbar bg-white border-b-2">
        <div className="flex-1">
          <Link
            className="btn btn-ghost text-xl text-green-500"
            to="/"
            title="home"
          >
            BookOasis
          </Link>
        </div>

        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search e.g 'science'"
              value={inputValue}
              onChange={handleInput}
              className="inputField input-bordered w-24 md:w-auto bg-gray-100 pr-24 pl-5 py-2 rounded-md"
              title="Enter a key word e.g love, science etc"
            />
          </div>
          <div className="dropdown dropdown-end category">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-btn text-green-500 "
            >
              Category <DownOutlined />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow"
            >
              <li>
                <a>Fiction</a>
              </li>
              <li>
                <a>Science</a>
              </li>
              <li>
                <a>Romance</a>
              </li>
              <li>
                <a>HIstory</a>
              </li>
            </ul>
          </div>
          <Link
            to="/cart"
            className="btn btn-ghost btn-circle avatar cartIcon"
            title="cart"
          >
            <ShoppingCartOutlined />
          </Link>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="profile">
                <UserOutlined />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mobileFormCtrl">
        <input
          type="text"
          placeholder="Search e.g 'science'"
          value={inputValue}
          onChange={handleInput}
          className="mobileInput input-bordered p-2 pr-10 pl-5 md:w-auto bg-white rounded-2xl "
          title="Enter a key word e.g love, science etc"
        />
      </div>
    </>
  );
};
