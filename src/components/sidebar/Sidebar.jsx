import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">ADMIN</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Painel de Controle</span>
          </li>

          <p className="title">Usuários</p>
          <li>
            <PersonOutlineIcon className="icon" />
            <span>Usuário</span>
          </li>
          <li>
            <StoreIcon className="icon" />
            <span>Produtos</span>
          </li>
          <li>
            <CreditCardIcon className="icon" />
            <span>Compras</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>

          <p className="title">Serviços</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Estatística</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notificações</span>
          </li>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Saúde do Sistema</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Histórico</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Configurações</span>
          </li>
          <p className="title">Sua Conta</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Perfil</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="temas"></div>
        <div className="temas"></div>
      </div>
    </div>
  );
};

export default Sidebar;
