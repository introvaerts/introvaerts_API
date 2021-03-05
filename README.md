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

### Create a Gallery

`POST /galleries/create`

#### Sample Request Body

```javascript
{
  "name": "My Photographs",
}
```

#### Sample Response

```
{
  "status": "success",
  "code": 200,
  "message": "Gallery created successfully",
  "gallery": {
    "images": [],
    "_id": "6041ff3483c56b1axxxxxxxx",
    "name": "My Photographs"
  }
}
```


### Find a Gallery

`GET /galleries/:galleryId`
`GET /galleries/6041ff3483c56b1axxxxxxxx`


#### Sample Response

```
{
  "status": "success",
  "code": 200,
  "message": "Found gallery successfuly",
  "gallery": {
    "images": [],
    "_id": "6041ff3483c56b1axxxxxxxx",
    "name": "My Photographs"
  }
}
```

### Update Gallery Name

`PATCH /galleries/:galleryId`

#### Sample Request Body

```javascript
{
  "name": "My Best Photographs",
}
```

#### Sample Response

```
{
  "status": "success",
  "code": 200,
  "message": "Name updated successfully",
  "gallery": {
    "images": [],
    "_id": "6041ff3483c56b1a30bd13b4",
    "name": "My Best Photographs"
  }
}
```


### Delete a gallery

`DELETE /galleries/:galleryId`


#### Sample Response

```
{
    "status": "success",
    "code": 204,
    "message": "Successfuly deleted Newest Gallery "
}
```


