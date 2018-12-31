# NoteManager
#### NoteManager is a REST API used to save, update, list, archived notes(/attached files) with a user signup/login system.

```
 Starting command: node server.js
 ```
 
```
 URL: 
 /users/signup
  Method:
  POST
  Data Params:
  email: [String]
  password: [String]
  Success Response:
  Code: 201
  Content: {"message": "User created"}
  Error Response:
  Code: 409
  Content: {"message": "Mail exists"}
  ```
  
 ```
URL: 
/users/login
  Method:
  POST
  Data Params:
  email: [String]
  password: [String]

  Success Response:
  Code: 201
  Content: {"message": "Auth successful",
            "token": [String]}
  Error Response:
  Code: 401
  Content: {"message": "Auth failed"}
```
```
URL: 
/users/:userId
  Method:
  DELETE
  URL Params:
  userId: [String]

  Success Response:
  Code: 200
  Content: {"message": "User deleted"}
  Error Response:
  Code: 401
  Content: {"message": "Auth failed"}
  ```

```
URL:
/notes
  Method:
  GET
  Data Params:
    Headers: 
      Authorization: "Bearer" + <WHITESPACE> + [token] 

  Success Response:
  Code: 201
  Content: {"count": [Integer],
            "notes": [
                      {"folder": [String],
                      "id": [String],
                      "text": [String]}
                      ]
           }
  Error Response:
  Code: 401
  Content: {"message": "Auth failed"}
```

```
URL:
/notes/:folderName
  Method:
  GET
  URL Params:
  folderName: [String]
  Data Params:
    Headers: 
      Authorization: "Bearer" + <WHITESPACE> + [token] 
  Success Response:
  Code: 201
  Content: {"count": [Integer],
            "notes": [
                      {"folder": [String],
                      "id": [String],
                      "text": [String]}
                      ]
           }
  Error Response:
  Code: 401
  Content: {"message": "Auth failed"}
  ```
  
  ```
  URL:
 /notes
  Method:
  POST
  Data Params:
    Headers: 
      Content-Type: application/json
      Authorization: "Bearer" + <WHITESPACE> + [token] 
    Body:
      required:
        text: [String]
      optional:
        folder: [String]
        attachedFile: [File]

  Success Response:
  Code: 201
  Content: {
            "message": "Created note",
            "createdProduct": {
              "id": [String],
              "text": [String],
              "folder": [String]
              }
            }

  Error Response:
  Code: 401
  Content: {"message": "Auth failed"}
  Code: 500
  Content: {"message": "Path `text` is required."}
  ```
  
  ```
URL:
 /notes/:noteId
  Method:
  PATCH
  URL Params:
  noteId: [String]
  Data Params:
    Headers: 
      Content-Type: application/json
      Authorization: "Bearer" + <WHITESPACE> + [token] 
    Body:
        text: [String]

  Success Response:
  Code: 201
  Content: {
            "message": "Updated note",
            }

  Error Response:
  Code: 401
  Content: {"message": "Auth failed"}
```

```
  URL:
 /notes/:noteId
  Method:
  DELETE
  URL Params:
  noteId: [String]
  Data Params:
    Headers: 
      Authorization: "Bearer" + <WHITESPACE> + [token] 

  Success Response:
  Code: 200
  Content: {
            "message": "Note deleted",
            }

  Error Response:
  Code: 401
  Content: {"message": "Auth failed"}
```
