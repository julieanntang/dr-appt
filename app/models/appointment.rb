class Appointment < ApplicationRecord
  belongs_to :patient
  belongs_to :physician

  def self.all_plus_more
    appointments = Appointment.all
    appointments.map do |appointment|
      {id: appointment.id, appointment_date:appointment.appointment_date, description:appointment.description, patient:appointment.patient, physician:appointment.physician}
    end
  end

end
