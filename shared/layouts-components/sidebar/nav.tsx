
import { MdDashboard, MdSettings, MdPeople, MdDirectionsCar, MdMap, MdNotifications, MdStorage, MdBusiness } from 'react-icons/md'
import { LuDot } from "react-icons/lu"

const IconWrapper = ({ children }: any) => <span style={{ fontSize: '20px' }}>{children}</span>

export const MENUITEMS: any = [
  {
    menutitle:'MAIN'
  },
  { path: "/dashboards/sales", icon: <IconWrapper><MdDashboard /></IconWrapper>, type: "link", active: false, selected: false, dirchange: false, title: "Dashboard" },

  {
    menutitle:'ADMIN PANEL'
  },

  {
    title: "Masters", icon: <IconWrapper><MdBusiness /></IconWrapper>, type: "sub", active: false, dirchange: false, children: [
      { path: "/masters/vehicle-manufacturers", icon: <LuDot />, type: "link", active: false, selected: false, dirchange: false, title: "Vehicle Manufacturers" },
      { path: "/masters/vehicle-models", icon: <LuDot />, type: "link", active: false, selected: false, dirchange: false, title: "Vehicle Models" },
      { path: "/masters/vehicle-types", icon: <LuDot />, type: "link", active: false, selected: false, dirchange: false, title: "Vehicle Types" },
      { path: "/masters/fuel-types", icon: <LuDot />, type: "link", active: false, selected: false, dirchange: false, title: "Fuel Types" },
      { path: "/masters/reminder-types", icon: <LuDot />, type: "link", active: false, selected: false, dirchange: false, title: "Reminder Types" },
      { path: "/masters/service-categories", icon: <LuDot />, type: "link", active: false, selected: false, dirchange: false, title: "Service Categories" },
      { path: "/masters/document-types", icon: <LuDot />, type: "link", active: false, selected: false, dirchange: false, title: "Document Types" },
      { path: "/masters/app-versions", icon: <LuDot />, type: "link", active: false, selected: false, dirchange: false, title: "App Versions" },
    ]
  },
  {
    title: "User Management", icon: <IconWrapper><MdPeople /></IconWrapper>, type: "sub", active: false, dirchange: false, children: [
      { path: "/user-management/users", icon: <LuDot />, type: "link", active: false, selected: false, dirchange: false, title: "Users" },
      { path: "/user-management/vehicle-assignments", icon: <LuDot />, type: "link", active: false, selected: false, dirchange: false, title: "Vehicle Assignments" },
      { path: "/user-management/driver-invitation", icon: <LuDot />, type: "link", active: false, selected: false, dirchange: false, title: "Driver Invitations" },
    ]
  },
  {
    title: "Vehicle Data", icon: <IconWrapper><MdDirectionsCar /></IconWrapper>, type: "sub", active: false, dirchange: false, children: [
      { path: "/vehicle-data/vehicles", icon: <LuDot />, type: "link", active: false, selected: false, dirchange: false, title: "Vehicles" },
      { path: "/vehicle-data/documents", icon: <LuDot />, type: "link", active: false, selected: false, dirchange: false, title: "Vehicle Documents" },
      { path: "/vehicle-data/reminders", icon: <LuDot />, type: "link", active: false, selected: false, dirchange: false, title: "Reminders" },
      { path: "/vehicle-data/tyres", icon: <LuDot />, type: "link", active: false, selected: false, dirchange: false, title: "Tyres" },
      { path: "/vehicle-data/garage-works", icon: <LuDot />, type: "link", active: false, selected: false, dirchange: false, title: "Garage Works" },
    ]
  },
  {
    title: "Trip & Usage Data", icon: <IconWrapper><MdMap /></IconWrapper>, type: "sub", active: false, dirchange: false, children: [
      { path: "/trip-usage/trips", icon: <LuDot />, type: "link", active: false, selected: false, dirchange: false, title: "Trips" },
      { path: "/trip-usage/fuel-entries", icon: <LuDot />, type: "link", active: false, selected: false, dirchange: false, title: "Fuel Entries" },
    ]
  },
  {
    title: "System & Logs", icon: <IconWrapper><MdStorage /></IconWrapper>, type: "sub", active: false, dirchange: false, children: [
      { path: "/system-logs/audit-logs", icon: <LuDot />, type: "link", active: false, selected: false, dirchange: false, title: "Audit Logs" },
      { path: "/system-logs/error-logs", icon: <LuDot />, type: "link", active: false, selected: false, dirchange: false, title: "Error Logs" },
      { path: "/system-logs/system-logs", icon: <LuDot />, type: "link", active: false, selected: false, dirchange: false, title: "System Logs" },
      { path: "/system-logs/otp-logs", icon: <LuDot />, type: "link", active: false, selected: false, dirchange: false, title: "OTP Logs" },
    ]
  },
  {
    title: "Notifications", icon: <IconWrapper><MdNotifications /></IconWrapper>, type: "sub", active: false, dirchange: false, children: [
      { path: "/notifications/device-tokens", icon: <LuDot />, type: "link", active: false, selected: false, dirchange: false, title: "Device Tokens" },
      { path: "/notifications/push-notifications", icon: <LuDot />, type: "link", active: false, selected: false, dirchange: false, title: "Push Notifications" },
    ]
  },
]
