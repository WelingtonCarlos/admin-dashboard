import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonIcon from "@mui/icons-material/Person";

// import { Container } from './styles';

const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">USERS</span>
        <span className="counter">54554</span>
        <span className="link">Ver todos</span>
      </div>
      <div className="right">
        <div className="percentage negative">
          <KeyboardArrowUpIcon />
          20%
        </div>
        <PersonIcon className="icon" />
      </div>
    </div>
  );
};

export default Widget;
