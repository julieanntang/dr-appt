import Home from "../pages/Home";
import Appointments from "../pages/Appointments";
import Physicians from "../pages/Physicians";
import Patients from "../pages/Patients";
import NewAppointment from "../pages/NewAppointment";
import NewPatient from "../pages/NewPatient";
import NewPhysician from "../pages/NewPhysician";

export const routes = [
  { pathname: "/", title: "Home", component: Home },
  { pathname: "/appointments", title: "Appointments", component: Appointments },
  { pathname: "/patients", title: "Patients", component: Patients },
  { pathname: "/physicians", title: "Physicians", component: Physicians },
  { pathname: "/new_appointment", title: "New Appointment", component: NewAppointment },
  { pathname: "/patient/new", title: "Add Patient", component: NewPatient },
  { pathname: "/physician/new", title: "Add Physician", component: NewPhysician }
];