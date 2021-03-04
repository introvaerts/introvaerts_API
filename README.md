# introvÆrts

## Endoints

### Create User

`POST /users/create`

#### Sample Request Body

```javascript
{
  "email": "monti@themaster.com",
  "password": "thegreatest"
}
```

#### Sample Response

```
{
  "status": "success",
  "message": "User added successfully!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjAzZDIwYzJhMWE5YjFjOTMyNGY5MWQwIiwiaWF0IjoxNjE0NjE4ODE4fQ.Ao5RONE2c0YRaZ848uKBmqMpNSBKi56KmOlAV2m5y4Q"
}
```

### Login

`POST /users/login`

#### Sample Request Body

```javascript
{
  "email": "monti@themaster.com",
  "password": "thegreatest"
}
```

#### Sample Response

###### Correct Credential

```
{
  status: 'success',
  message: 'Login successful!',
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjAzZDIwYzJhMWE5YjFjOTMyNGY5MWQwIiwiaWF0IjoxNjE0NjE4ODE4fQ.Ao5RONE2c0YRaZ848uKBmqMpNSBKi56KmOlAV2m5y4Q"
}
```

###### Wrong email

```
{
  code: 401,
  message: "User does not exist"
}
```

###### Wrong password

```
{
  code: 400,
  message: "Invalid Password"
}
```

### Upload Image

`POST /images/upload`

#### Sample Request Body (Form-Data)

```javascript
{
  "image": "image-file.png",
  "description": "greatest thing ever"
}
```

#### Sample Response

```
{
  "status": 201,
  "message": "Successfully uploaded and added to gallery default",
  "image": {
      "_id": "603fa96630da8d2a8ae80754",
      "description": "adfadfd",
      "image_url": "https://introvearts.s3.amazonaws.com/603e1b4f5f454a7ae6c191dd/1614784869838.07",
      "__v": 0
    }
}
```

### Delete Image

`DELETE /images/:id`

#### Sample Response

```
{
  "status": "success",
  "code": 204,
  "message": "Image successfully deleted"
}
```
