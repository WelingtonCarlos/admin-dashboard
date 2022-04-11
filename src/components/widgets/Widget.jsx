import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

// import { Container } from './styles';

const Widget = ({ type }) => {
  let data;

  // temporary data

  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "Usuários",
        isMoney: false,
        link: "Todos os usuários",
        icon: (
          <PersonIcon
            className="icon"
            style={{ color: "blue", backgroundColor: "#008cff33" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Pedidos",
        isMoney: false,
        link: "Todos os pedidos",
        icon: (
          <ShoppingCartIcon
            className="icon"
            style={{ color: "goldenrod", backgroundColor: "#ff910033" }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "Ganhos",
        isMoney: true,
        link: "Ver lucro líquido",
        icon: (
          <MonetizationOnIcon
            className="icon"
            style={{ color: "green", backgroundColor: "#00ff8833" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "Saldo",
        isMoney: false,
        link: "Ver detalhes",
        icon: (
          <AccountBalanceIcon
            className="icon"
            style={{ color: "purple", backgroundColor: "#ff006233" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage negative">
          <KeyboardArrowUpIcon />
          20%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
