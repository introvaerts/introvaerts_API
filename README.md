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
------ Subdomains --------
### Create Subdomain

`POST /subdomains/create`

#### Sample Request Body

```
{
  "name": "my subdomain",
  "theme": "daaaark",
  "page_title": "my title",
  "about": {
      "tagline": "my tagline",
      "description": "bla bla blaaa"
  },
  "contact": {
      "first_name": "first name",
      "last_name": "last name",
      "address": {
          "street_and_number": "sample street 100",
          "postalcode": "10999",
          "city": "Berlin",
          "country": "Germany"
      }
  },
  "contact_tagline": "tagline"
}
```

#### Sample Response

```
{
  "status": "success",
  "code": 201,
  "message": "Successfully created subdomain my subdomain",
  "subdomain": {
      "contact": {
          "address": {
              "street_and_number": "sample street 100",
              "postalcode": "10999",
              "city": "Berlin",
              "country": "Germany"
          },
          "first_name": "first name",
          "last_name": "last name"
      },
      "galleries": [],
      "_id": "604204d00a17d41a1eac9bcb",
      "name": "my subdomain",
      "theme": "daaaark",
      "page_title": "my title",
      "about": {
          "tagline": "my tagline",
          "description": "bla bla blaaa"
      }
   }
}
```

### Update Subdomain

`PATCH /subdomains/update/:id`

#### Sample Request Body

```
{
  "name": "new name",
  "theme": "new theme",
  "contact": {
      "first_name": "got a new first name"
  },
  "page_title": "page title"
  }
```

#### Sample Response

```
{
  "status": "success",
  "code": 204,
  "message": "Successfully updated new name",
  "subdomain": {
      "about": {
          "tagline": "my tagline",
          "description": "bla bla blaaa"
      },
      "contact": {
          "first_name": "got a new first name",
          "last_name": "jafkld"
      },
      "galleries": [],
      "_id": "604204d00a17d41a1eac9bcb",
      "name": "new name",
      "theme": "new theme",
      "page_title": "page title"
  }
}
```



------ Gallery --------
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


------ Image --------

### Upload Image

`POST /images/upload`

#### Sample Request Body (Form-Data)

```javascript
{
  "image": "image-file.png",
  "title": "Florence flowers",
  "media": "Oil on canvas",
  "year": 1942,
  "dimestions": "150 x 200",
  "alt_text": "Florence flowers",
  "description": "greatest thing ever"
  "gallery_id": "6041db053a81000e66f1e714"
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