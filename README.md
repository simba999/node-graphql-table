# GraphQL with Node.js

## Guide

#### Add new conference
**POST** http://localhost:8080/graphql
```json
{
  "query": "mutation ($data: ConferenceInput!) { addConference(data: $data) }",
  "variables": {
    "data": {
      "name": "GraphQL Europe 2017",
      "city": "California",
      "year": 2017
    }
  }
}
```

#### Add attendee to conference
**POST** http://localhost:8080/graphql
```json
{
  "query": "mutation ($data: AttendeeInput!) { addAttendee(data: $data) }",
  "variables": {
    "data": {
      "name": "Phu Phan",
      "conferenceId": "598ad19fc1217b5b6010e8db"
    }
  }
}
```

#### Get all of conference

**POST** http://localhost:8080/graphql

```json
{
  "query": "query { conferences { name city year } }"
}
```

#### Get all of conference with attendees

**POST** http://localhost:8080/graphql
```json
{
  "query": "query { conferences { name city year attendees(first: 4) { name } } }"
}
```

