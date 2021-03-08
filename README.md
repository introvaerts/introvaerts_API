# introvÆrts

## Endoints

## User Endpoints
[Create User](#create-user)  
[Login](#login)

## Subdomain Endpoints
[Create Subdomain](#create-subdomain)  
[Update Subdomain](#update-subdomain)  
[Find a Subdomain](#find-a-subdomain)  


## Gallery Endpoints
[Create a Gallery](#create-a-gallery)  
[Find a Gallery](#find-a-gallery)  
[Update Gallery name](#update-gallery-name)  
[Delete a Gallery](#delete-a-gallery)  

## Image Endpoints
[Upload Image](#upload-image)  
[Delete Image](#delete-image)  


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

`PATCH /subdomains/:id`

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

### Find a Subdomain

`GET /subdomains/:subdomainId`
`GET /galleries/603d175719c620e277ccf11c`

#### Sample Response

```
{
    "status": "success",
    "code": 201,
    "message": "Found subdomain successfully",
    "subdomain": {
        "about": {
            "about_image_url": "noceimage.com",
            "tagline": "beautiful shit",
            "description": "Holy cow"
        },
        "contact": {
            "address": {
                "street_and_number": "allocateurstr. 1122",
                "postalcode": "12044",
                "city": "Berlin",
                "country": "Germany"
            },
            "first_name": "Jasmin",
            "last_name": "Jenull"
        },
        "galleries": [
            "6045d5cf45b0d908792f3b53",
            "6045d6571304d508f7c87f60"
        ],
        "_id": "603d175719c620e277ccf11c",
        "name": "jasmin",
        "theme": "black",
        "contact_tagline": "Please buy my crap"
    },
    "galleries": [
        {
            "images": [],
            "_id": "6045d5cf45b0d908792f3b53",
            "name": "testing adding to subdomain"
        },
        {
            "images": [],
            "_id": "6045d6571304d508f7c87f60",
            "name": "Testing again"
        }
    ]
}
```



------ Gallery --------
### Create a Gallery

`POST /galleries/create`

#### Sample Request Body

```javascript
{
  "name": "My Photographs",
  "subdomainId": "603d175719c620e277ccf11c"
}
```

#### Sample Response

```
{
  "status": "success",
  "code": 200,
  "message": "Gallery created successfully and added to jasmin",
  "gallery": {
    "images": [],
    "_id": "6041ff3483c56b1axxxxxxxx",
    "name": "My Photographs"
  }
}
```

### Find a Gallery

`GET /galleries/:galleryId`
`GET /galleries/6044b9139352920b3cdd42ae`

#### Sample Response

```
{
    "status": "success",
    "code": 200,
    "message": "Found gallery successfully",
    "gallery": {
        "images": [
            "6044e5f2ce77ad35236a3b8d",
            "6044e5fbce77ad35236a3b8e",
            "6044e603ce77ad35236a3b8f"
        ],
        "_id": "6044b9139352920b3cdd42ae",
        "name": "Testing now"
    },
    "images": [
        {
            "caption": {
                "title": "Introvaerts Logo test 1",
                "media": "logo",
                "year": 2021,
                "dimensions": "200 x 200"
            },
            "_id": "6044e5f2ce77ad35236a3b8d",
            "alt_text": "Introvaerts Logo",
            "description": "This is the logo of our startup",
            "image_url": "https://introvearts.s3.amazonaws.com/6044b9139352920b3cdd42ae/1615128049679.png"
        },
        {
            "caption": {
                "title": "Introvaerts Logo test 2",
                "media": "logo",
                "year": 2021,
                "dimensions": "200 x 200"
            },
            "_id": "6044e5fbce77ad35236a3b8e",
            "alt_text": "Introvaerts Logo",
            "description": "This is the logo of our startup",
            "image_url": "https://introvearts.s3.eu-central-1.amazonaws.com/6044b9139352920b3cdd42ae/1615128059042.png"
        },
        {
            "caption": {
                "title": "Introvaerts Logo test 3",
                "media": "logo",
                "year": 2021,
                "dimensions": "200 x 200"
            },
            "_id": "6044e603ce77ad35236a3b8f",
            "alt_text": "Introvaerts Logo",
            "description": "This is the logo of our startup",
            "image_url": "https://introvearts.s3.eu-central-1.amazonaws.com/6044b9139352920b3cdd42ae/1615128066873.png"
        }
    ]
}
```

### Update Gallery Name

`PATCH /galleries/:id`

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

`DELETE /galleries/:id`


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
  "dimensions": "150 x 200",
  "alt_text": "Florence flowers",
  "description": "greatest thing ever"
  "gallery_id": "6041db053a81000e66f1e714"
}
```

#### Sample Response

```
{
    "status": "success",
    "code": 201,
    "message": "Successfully uploaded image and added to some gallery",
    "image": {
        "_id": "6044b6930eb5a5093f7d6aca",
        "caption": {
            "title": "Florence flowers",
            "media": "Oil on canvas",
            "year": 1942
        },
        "alt_text": "Florence flowers",
        "description": "greatest thing ever",
        "image_url": "https://introvearts.s3.amazonaws.com/6041db053a81000e66f1e714/1615115922792.png"
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