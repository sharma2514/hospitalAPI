# hospitalAPI

# description
API for the doctors of a Hospital which has beenallocated by the govt for testing and quarantine + well being of  COVID-19patients

#how to start
1. clone repo
2. install dependencies
3. install npm
4. nodemon index.js
5. run the the code in postman with corresponding routes and data

# functionality

# Theme:
  1. i am going to design an API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of  COVID-19 patients
  2. There are 2 types of ​Users
    1. Doctors
    2. Patients
  3. Doctors can log in
  4. Each time a patient visits, the doctor will follow 2 steps
    1. Register​ the patient in the app (using phone number, if the patientalready exists, just return the patient info in the API)
    2. After the checkup, create a ​Report
  5. Patient Report will have the following fields
    1. Created by doctor
    2. Status (You can use enums if you want to):-Can be either of: [Negative, Travelled-Quarantine,Symptoms-Quarantine, Positive-Admit]
    3. Date
    
  6. Routes
    1. /doctors/register → with username and password
    2. /doctors/login → returns the JWT to be used
    3. /patients/register
    4. /patients/:id/create_report
    5. /patients/:id/all_reports → List all the reports of a patient oldest to latest
    6. /reports/:status  → List all the reports of all the patients filtered by a specific status
    
    #ScreenShots
    #Doctor Registration
    #Doctor Login
