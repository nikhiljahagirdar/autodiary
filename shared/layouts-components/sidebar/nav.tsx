import { MdDashboard, MdSettings, MdPeople, MdDirectionsCar, MdMap, MdNotifications, MdStorage, MdBusiness } from 'react-icons/md'

const IconWrapper = ({ children }: any) => <span style={{ fontSize: '20px' }}>{children}</span>

export const MENUITEMS: any = [
  {
    menutitle:'MAIN'
  },
  { path: "/dashboard", icon: <IconWrapper><MdDashboard /></IconWrapper>, type: "link", active: false, selected: false, dirchange: false, title: "Dashboard" },

  {
    menutitle:'ADMIN PANEL'
  },

  {
    title: "Masters", icon: <IconWrapper><MdBusiness /></IconWrapper>, type: "sub", active: false, dirchange: false, children: [
      { path: "/masters/vehicle-manufacturers", type: "link", active: false, selected: false, dirchange: false, title: "Vehicle Manufacturers" },
      { path: "/masters/vehicle-models", type: "link", active: false, selected: false, dirchange: false, title: "Vehicle Models" },
      { path: "/masters/vehicle-types", type: "link", active: false, selected: false, dirchange: false, title: "Vehicle Types" },
      { path: "/masters/fuel-types", type: "link", active: false, selected: false, dirchange: false, title: "Fuel Types" },
      { path: "/masters/reminder-types", type: "link", active: false, selected: false, dirchange: false, title: "Reminder Types" },
      { path: "/masters/service-categories", type: "link", active: false, selected: false, dirchange: false, title: "Service Categories" },
      { path: "/masters/document-types", type: "link", active: false, selected: false, dirchange: false, title: "Document Types" },
      { path: "/masters/app-versions", type: "link", active: false, selected: false, dirchange: false, title: "App Versions" },
    ]
  },
  {
    title: "User Management", icon: <IconWrapper><MdPeople /></IconWrapper>, type: "sub", active: false, dirchange: false, children: [
      { path: "/user-management/users", type: "link", active: false, selected: false, dirchange: false, title: "Users" },
      { path: "/user-management/vehicle-assignments", type: "link", active: false, selected: false, dirchange: false, title: "Vehicle Assignments" },
      { path: "/user-management/driver-invitation", type: "link", active: false, selected: false, dirchange: false, title: "Driver Invitations" },
    ]
  },
  {
    title: "Vehicle Data", icon: <IconWrapper><MdDirectionsCar /></IconWrapper>, type: "sub", active: false, dirchange: false, children: [
      { path: "/vehicle-data/vehicles", type: "link", active: false, selected: false, dirchange: false, title: "Vehicles" },
      { path: "/vehicle-data/documents", type: "link", active: false, selected: false, dirchange: false, title: "Vehicle Documents" },
      { path: "/vehicle-data/reminders", type: "link", active: false, selected: false, dirchange: false, title: "Reminders" },
      { path: "/vehicle-data/tyres", type: "link", active: false, selected: false, dirchange: false, title: "Tyres" },
      { path: "/vehicle-data/garage-work", type: "link", active: false, selected: false, dirchange: false, title: "Garage Works" },
    ]
  },
  {
    title: "Trip & Usage Data", icon: <IconWrapper><MdMap /></IconWrapper>, type: "sub", active: false, dirchange: false, children: [
      { path: "/trip-usage/trips", type: "link", active: false, selected: false, dirchange: false, title: "Trips" },
      { path: "/trip-usage/fuel-entries", type: "link", active: false, selected: false, dirchange: false, title: "Fuel Entries" },
    ]
  },
  {
    title: "System & Logs", icon: <IconWrapper><MdStorage /></IconWrapper>, type: "sub", active: false, dirchange: false, children: [
      { path: "/system-logs/audit-logs", type: "link", active: false, selected: false, dirchange: false, title: "Audit Logs" },
      { path: "/system-logs/error-logs", type: "link", active: false, selected: false, dirchange: false, title: "Error Logs" },
      { path: "/system-logs/system-logs", type: "link", active: false, selected: false, dirchange: false, title: "System Logs" },
      { path: "/system-logs/otp-logs", type: "link", active: false, selected: false, dirchange: false, title: "OTP Logs" },
    ]
  },
  {
    title: "Notifications", icon: <IconWrapper><MdNotifications /></IconWrapper>, type: "sub", active: false, dirchange: false, children: [
      { path: "/notifications/device-tokens", type: "link", active: false, selected: false, dirchange: false, title: "Device Tokens" },
      { path: "/notifications/push-notifications", type: "link", active: false, selected: false, dirchange: false, title: "Push Notifications" },
    ]
  },
  {
    title: "Settings", icon: <IconWrapper><MdSettings /></IconWrapper>, type: "sub", active: false, dirchange: false, children: [
      { path: "/settings/admin-users", type: "link", active: false, selected: false, dirchange: false, title: "Admin Users" },
      { path: "/settings/backup-restore", type: "link", active: false, selected: false, dirchange: false, title: "Backup & Restore" },
    ]
  },
]