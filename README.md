# Gym System Management

## Description

```
A project designed to assist in managing a gym by allowing registration and monitoring of student membership payments.
```

## Requirements

### Functional Requirements

- It should be possible to register a gym.

- It should be possible to register a student.

- It should be possible to record a payment for a student.

- It should be possible to retrieve data from a logged-in gym.

- It should be possible to deactivate a student.

- It should be possible to list all students.

- It should be possible to retrieve details of a single student.

- It should be possible to list all paid and unpaid membership fees of a student.

- It should be possible to view all paid membership fees for the month.

- It should be possible to view all unpaid membership fees for the month.

- It should be possible to calculate the total revenue received in a month.

- It should be possible to view the total outstanding amount yet to be received.

### Non-Functional Requirements

- A student can only have one registered email.

- Each gym can only have one registered CNPJ.

- When registering a student, 12 installments should be created for the membership fee.

- All financial operations and student listings must include active students.

- There should be an option to view inactive students as well.

### Technical Requirements

- The gym password must be encrypted.

- Data will be stored in PostgreSQL.

- The project will be developed using Node.js.

- The gym should be authenticated using a JWT token.
