# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

Appointment.destroy_all
Physician.destroy_all
Patient.destroy_all

physicians = Physician.create(
[{name:"Dr. Tony Stark"},
{name:"Dr. Bruce Banner"},
{name:"Dr. Stephen Strange"}])

3.times do |i|
  patient = Patient.create(name: Faker::Name.name)
  Appointment.create(appointment_date: Faker::Time.forward(days: 15, period: :afternoon), description: "Physical Check-Up", patient_id: patient.id, physician_id: physicians[0].id)
  Appointment.create(appointment_date: Faker::Time.forward(days: 30, period: :morning), description: "Eye Exam", patient_id: patient.id, physician_id: physicians[1].id)
  Appointment.create(appointment_date: Faker::Time.forward(days: 20, period: :evening), description: "GERD", patient_id: patient.id, physician_id: physicians[2].id)
end

puts "Appointment size: #{Appointment.all.length}"
puts "Patient size: #{Patient.all.length}"
puts "Physician size: #{Physician.all.length}"