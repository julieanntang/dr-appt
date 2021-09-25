import React, { useState } from "react";
import SemanticLoader from "../components/SemanticLoader";
import SemanticLoadError from "../components/SemanticLoadError";
import useAxiosOnMount from "../hooks/useAxiosOnMount";
import { Button, Form, Input, Select } from "semantic-ui-react";
import axios from "axios";

// Bonus create a dropdownloader
export default function NewAppointment() {
  const [physicianId, setPhysicianId] = useState(null);
  const [patientId, setPatientId] = useState(null);
  const [description, setDescription] = useState(null);
  const [appointment_date, setAppointmentDate] = useState("12:00 PM");
  const {
    data: patients,
    loading: patientsLoading,
    error: perr,
  } = useAxiosOnMount("/api/patients");
  const {
    data: physicians,
    loading: physiciansLoading,
    error: pherr,
  } = useAxiosOnMount("/api/physicians");

  const handleChange = (e, { value }) => {
    setPatientId(value);
  };
  const handlePhysicianChange = (e, { value }) => {
    setPhysicianId(value);
  };
  const handleSubmit = async () => {
    await axios.post("/api/appointments", {
      appointment_date,
      description,
      physician_id: physicianId,
      patient_id: patientId,
    });
  };

  const renderPatients = () => {
    if (patientsLoading) {
      return <SemanticLoader />;
    }
    if (perr) {
      return <SemanticLoadError error={perr} />;
    }
    // we map data into options =>  { key: 'bj', value: 'bj', text: 'Benin' },
    const patientsOptions = patients.map((p) => {
      return { key: p.id, value: p.id, text: p.name };
    });

    return (
      <Select
        onChange={handleChange}
        placeholder="Select Patient"
        options={patientsOptions}
      />
    );
  };

  const renderPhysicians = () => {
    if (physiciansLoading) {
      return <SemanticLoader />;
    }
    if (pherr) {
      return <SemanticLoadError error={pherr} />;
    }
    // we map data into options =>  { key: 'bj', value: 'bj', text: 'Benin' },
    const physiciansOptions = physicians.map((ph) => {
      return { key: ph.id, value: ph.id, text: ph.name };
    });

    return (
      <Select
        onChange={handlePhysicianChange}
        placeholder="Select Physician"
        options={physiciansOptions}
      />
    );
  };

  return (
    <div>
      <h1>New Appointment</h1>
      <Form onSubmit={handleSubmit}>
        {renderPatients()}
        {renderPhysicians()}
        <Input
          placeholder="enter description"
          value={description}
          onChange={(e, { value }) => setDescription(value)}
        />
        <Input
          placeholder="enter time"
          value={appointment_date}
          onChange={(e, { value }) => setAppointmentDate(value)}
        />
        <Button type={"submit"}>add</Button>
      </Form>
    </div>
  );
}