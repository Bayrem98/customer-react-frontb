import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ProSidebar>
        <h1>The Top Cars</h1>
        <Menu iconShape="square">
          <MenuItem>
            <Link to="/astonmartin">Aston martin</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/bentley">Bentley</Link>
          </MenuItem>
          <MenuItem>
            <Link to="bugatti">Bugatti</Link>
          </MenuItem>
          <MenuItem>
            <Link to="ferrari">Ferrari</Link>
          </MenuItem>
          <MenuItem>
            <Link to="lamborghini">Lamborghini</Link>
          </MenuItem>
          <MenuItem>
            <Link to="lotuscars">Lotus Cars</Link>
          </MenuItem>
          <MenuItem>
            <Link to="maserati">Maserati</Link>
          </MenuItem>
          <MenuItem>
            <Link to="mercedesbenz">Mercedes Benz</Link>
          </MenuItem>
          <MenuItem>
            <Link to="porsche">Porsche</Link>
          </MenuItem>
          <MenuItem>
            <Link to="rollsroyce">Rolls-Royce</Link>
          </MenuItem>
        </Menu>
      </ProSidebar>
    </div>
  );
};
export default Sidebar;
