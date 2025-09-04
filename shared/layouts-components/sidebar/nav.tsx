import SpkBadge from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge";
import * as Svgicons from "./menusvg-icons";

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
    path: "/dashboards/sales", type: "link", icon: Svgicons.Salesicon, active: false, selected: false, dirchange: false, title: "Dashboard"
  },
  {
    title: "Masters", type: "sub", icon: Svgicons.Salesicon, active: false, dirchange: false, children: [
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
    title: "Users", type: "sub", icon: Svgicons.Salesicon, active: false, dirchange: false, children: [
      { path: "/users/users", type: "link", active: false, selected: false, dirchange: false, title: "Users" },
      { path: "/users/vehicle-assignments", type: "link", active: false, selected: false, dirchange: false, title: "Vehicle Assignments" },
      { path: "/users/driver-invitations", type: "link", active: false, selected: false, dirchange: false, title: "Driver Invitations" },
    ]
  },
  {
    title: "Vehicles", type: "sub", icon: Svgicons.Salesicon, active: false, dirchange: false, children: [
      { path: "/vehicles/vehicles", type: "link", active: false, selected: false, dirchange: false, title: "Vehicles" },
      { path: "/vehicles/documents", type: "link", active: false, selected: false, dirchange: false, title: "Vehicle Documents" },
      { path: "/vehicles/reminders", type: "link", active: false, selected: false, dirchange: false, title: "Reminders" },
      { path: "/vehicles/tyres", type: "link", active: false, selected: false, dirchange: false, title: "Tyres" },
      { path: "/vehicles/garage-works", type: "link", active: false, selected: false, dirchange: false, title: "Garage Works" },
    ]
  },
  {
    title: "Trips", type: "sub", icon: Svgicons.Salesicon, active: false, dirchange: false, children: [
      { path: "/trips/trips", type: "link", active: false, selected: false, dirchange: false, title: "Trips" },
      { path: "/trips/fuel-entries", type: "link", active: false, selected: false, dirchange: false, title: "Fuel Entries" },
    ]
  },
  {
    title: "Logs", type: "sub", icon: Svgicons.Salesicon, active: false, dirchange: false, children: [
      { path: "/logs/audit-logs", type: "link", active: false, selected: false, dirchange: false, title: "Audit Logs" },
      { path: "/logs/error-logs", type: "link", active: false, selected: false, dirchange: false, title: "Error Logs" },
      { path: "/logs/system-logs", type: "link", active: false, selected: false, dirchange: false, title: "System Logs" },
      { path: "/logs/otp-logs", type: "link", active: false, selected: false, dirchange: false, title: "OTP Logs" },
    ]
  },
  {
    title: "Notifications", type: "sub", icon: Svgicons.Salesicon, active: false, dirchange: false, children: [
      { path: "/notifications/device-tokens", type: "link", active: false, selected: false, dirchange: false, title: "Device Tokens" },
      { path: "/notifications/push-notifications", type: "link", active: false, selected: false, dirchange: false, title: "Push Notifications" },
    ]
  },
  {
    title: "Settings", type: "sub", icon: Svgicons.Salesicon, active: false, dirchange: false, children: [
      { path: "/settings/admin-users", type: "link", active: false, selected: false, dirchange: false, title: "Admin Users" },
      { path: "/settings/backup-restore", type: "link", active: false, selected: false, dirchange: false, title: "Backup & Restore" },
    ]
  },
]