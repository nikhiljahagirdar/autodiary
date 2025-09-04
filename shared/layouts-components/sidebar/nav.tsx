import SpkBadge from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge";
import { 
  MdDashboard, MdSettings, MdPeople, MdDirectionsCar, MdNotifications,
  MdBusiness, MdLocalGasStation, MdRememberMe, MdBuild, MdDescription,
  MdPhoneAndroid, MdAssignment, MdPersonAdd, MdDocumentScanner,
  MdAlarm, MdHistory, MdError, MdComputer,
  MdSms, MdToken, MdAdminPanelSettings, MdBackup
} from 'react-icons/md';
import { FaCar, FaGasPump, FaTools, FaFileAlt, FaRoute, FaCircle } from 'react-icons/fa';
import { IoCarSport, IoNotifications } from 'react-icons/io5';
import { AiOutlineGateway } from 'react-icons/ai';

const badgePrimary = <SpkBadge variant="" Customclass="bg-primary-transparent ms-2">9</SpkBadge>
const badgeSucccess = <SpkBadge variant="" Customclass="bg-success-transparent ms-2">6</SpkBadge>
const badgeWarning = <SpkBadge variant="" Customclass="bg-warning-transparent ms-2">5</SpkBadge>
const badgeInfo = <SpkBadge variant="" Customclass="bg-info-transparent ms-2">4</SpkBadge>
const badgedanger = <SpkBadge variant="" Customclass="bg-danger-transparent ms-2">6</SpkBadge>
const badgeSuccess = <SpkBadge variant="" Customclass="bg-success-transparent ms-2">8</SpkBadge>

export const MENUITEMS: any = [

  {
     menutitle:'MAIN'
  },
  {
    path: "/dashboards/sales", type: "link", icon: <MdDashboard className="side-menu__icon" />, active: false, selected: false, dirchange: false, title: "Dashboard"
  },
  {
    title: "Masters", type: "sub", icon: <MdBusiness className="side-menu__icon" />, active: false, dirchange: false, children: [
      { path: "/masters/vehicle-manufacturers", type: "link", active: false, selected: false, dirchange: false, title: "Vehicle Manufacturers", icon: <FaCar className="side-menu__icon" /> },
      { path: "/masters/vehicle-models", type: "link", active: false, selected: false, dirchange: false, title: "Vehicle Models", icon: <IoCarSport className="side-menu__icon" /> },
      { path: "/masters/vehicle-types", type: "link", active: false, selected: false, dirchange: false, title: "Vehicle Types", icon: <MdDirectionsCar className="side-menu__icon" /> },
      { path: "/masters/fuel-types", type: "link", active: false, selected: false, dirchange: false, title: "Fuel Types", icon: <FaGasPump className="side-menu__icon" /> },
      { path: "/masters/reminder-types", type: "link", active: false, selected: false, dirchange: false, title: "Reminder Types", icon: <MdRememberMe className="side-menu__icon" /> },
      { path: "/masters/service-categories", type: "link", active: false, selected: false, dirchange: false, title: "Service Categories", icon: <FaTools className="side-menu__icon" /> },
      { path: "/masters/document-types", type: "link", active: false, selected: false, dirchange: false, title: "Document Types", icon: <FaFileAlt className="side-menu__icon" /> },
      { path: "/masters/app-versions", type: "link", active: false, selected: false, dirchange: false, title: "App Versions", icon: <MdPhoneAndroid className="side-menu__icon" /> },
    ]
  },
  {
    title: "Users", type: "sub", icon: <MdPeople className="side-menu__icon" />, active: false, dirchange: false, children: [
      { path: "/users/users", type: "link", active: false, selected: false, dirchange: false, title: "Users", icon: <MdPeople className="side-menu__icon" /> },
      { path: "/users/vehicle-assignments", type: "link", active: false, selected: false, dirchange: false, title: "Vehicle Assignments", icon: <MdAssignment className="side-menu__icon" /> },
      { path: "/users/driver-invitations", type: "link", active: false, selected: false, dirchange: false, title: "Driver Invitations", icon: <MdPersonAdd className="side-menu__icon" /> },
    ]
  },
  {
    title: "Vehicles", type: "sub", icon: <MdDirectionsCar className="side-menu__icon" />, active: false, dirchange: false, children: [
      { path: "/vehicles/vehicles", type: "link", active: false, selected: false, dirchange: false, title: "Vehicles", icon: <MdDirectionsCar className="side-menu__icon" /> },
      { path: "/vehicles/documents", type: "link", active: false, selected: false, dirchange: false, title: "Vehicle Documents", icon: <MdDocumentScanner className="side-menu__icon" /> },
      { path: "/vehicles/reminders", type: "link", active: false, selected: false, dirchange: false, title: "Reminders", icon: <MdAlarm className="side-menu__icon" /> },
      { path: "/vehicles/tyres", type: "link", active: false, selected: false, dirchange: false, title: "Tyres", icon: <FaCircle className="side-menu__icon" /> },
      { path: "/vehicles/garage-works", type: "link", active: false, selected: false, dirchange: false, title: "Garage Works", icon: <AiOutlineGateway className="side-menu__icon" /> },
    ]
  },
  {
    title: "Trips", type: "sub", icon: <FaRoute className="side-menu__icon" />, active: false, dirchange: false, children: [
      { path: "/trips/trips", type: "link", active: false, selected: false, dirchange: false, title: "Trips", icon: <FaRoute className="side-menu__icon" /> },
      { path: "/trips/fuel-entries", type: "link", active: false, selected: false, dirchange: false, title: "Fuel Entries", icon: <MdLocalGasStation className="side-menu__icon" /> },
    ]
  },
  {
    title: "Logs", type: "sub", icon: <MdHistory className="side-menu__icon" />, active: false, dirchange: false, children: [
      { path: "/logs/audit-logs", type: "link", active: false, selected: false, dirchange: false, title: "Audit Logs", icon: <MdHistory className="side-menu__icon" /> },
      { path: "/logs/error-logs", type: "link", active: false, selected: false, dirchange: false, title: "Error Logs", icon: <MdError className="side-menu__icon" /> },
      { path: "/logs/system-logs", type: "link", active: false, selected: false, dirchange: false, title: "System Logs", icon: <MdComputer className="side-menu__icon" /> },
      { path: "/logs/otp-logs", type: "link", active: false, selected: false, dirchange: false, title: "OTP Logs", icon: <MdSms className="side-menu__icon" /> },
    ]
  },
  {
    title: "Notifications", type: "sub", icon: <MdNotifications className="side-menu__icon" />, active: false, dirchange: false, children: [
      { path: "/notifications/device-tokens", type: "link", active: false, selected: false, dirchange: false, title: "Device Tokens", icon: <MdToken className="side-menu__icon" /> },
      { path: "/notifications/push-notifications", type: "link", active: false, selected: false, dirchange: false, title: "Push Notifications", icon: <IoNotifications className="side-menu__icon" /> },
    ]
  },
  {
    title: "Settings", type: "sub", icon: <MdSettings className="side-menu__icon" />, active: false, dirchange: false, children: [
      { path: "/settings/admin-users", type: "link", active: false, selected: false, dirchange: false, title: "Admin Users", icon: <MdAdminPanelSettings className="side-menu__icon" /> },
      { path: "/settings/backup-restore", type: "link", active: false, selected: false, dirchange: false, title: "Backup & Restore", icon: <MdBackup className="side-menu__icon" /> },
    ]
  },
]