# Guidr Back-End

| Method | Description           | Endpoint         |
| ------ | --------------------- | ---------------- |
| POST   | Create a user account | '/auth/register' |
| POST   | Login a user          | '/auth/login'    |

### Base URL: https://guidr1.herokuapp.com/api/

## Register(Non-protected)
**HTTP Method:** *POST*

**URL:** */auth/register*
### Register Table

| Key      | Type   | Required |
| -------- | ------ | -------- |
| username | string | Yes      |
| password | string | Yes      |

### example

```
{
   "username": "jsmith",
   "password": "jsmith"
}
```

### return
```
{
   "message": "Registration successful jsmith"!,
   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imtsb2NrIiwiaWF0IjoxNTgyODE1NzEyLCJleHAiOjE1ODI4MTkzMTJ9.YaduCwtuESqfPocXdzS2ggRZVxF9lQ5fB0lh7DpXQb8"
}
```
