import "./featured.scss";
import "react-circular-progressbar/dist/styles.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import { Container } from './styles';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <div className="title">Receita Total</div>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={3} />
        </div>
        <p className="title">Total de vendas feitas hoje</p>
        <p className="amount">R$ 730,00</p>
        <p className="desc">
          Processando últimas transações. Últimos pagamentos podem não estar
          inclusos.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Hoje</div>
            <div className="itemResult negative">
              <div className="resultAmount">R$4.9k</div>
              <KeyboardArrowDownIcon fontSize="small" />
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Semana</div>
            <div className="itemResult negative">
              <div className="resultAmount">R$7.3k</div>
              <KeyboardArrowDownIcon fontSize="small" />
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Mês</div>
            <div className="itemResult positive">
              <div className="resultAmount">R$47.3k</div>
              <KeyboardArrowUpIcon fontSize="small" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
