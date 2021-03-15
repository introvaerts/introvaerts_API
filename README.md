# introvÆrts

## Endoints

## User Endpoints

[Create User](#create-user)  
[Login](#login)  
[Get info](#get-info)  
[Update email](#update-email)

## Subdomain Endpoints

[Create Subdomain](#create-subdomain)  
[Update Subdomain](#update-subdomain)  
[Find a Subdomain](#find-a-subdomain)  
[Find a Subdomain by name](#find-a-subdomain-by-name)  
[Check Subdomain name availability](#check-subdomain-name-availability)
[Publish Subdomain](#publish-subdomain)

## Gallery Endpoints

[Create a Gallery](#create-a-gallery)  
[Find a Gallery](#find-a-gallery)  
[Find a Gallery by Gallery name](#find-a-gallery-by-gallery-name)  
[Update Gallery name](#update-gallery-name)  
[Delete a Gallery](#delete-a-gallery)

## Image Endpoints

[Upload Image](#upload-image)  
[Get one Image](#get-one-image)
[Delete Image](#delete-image)

### Create User

`POST /users/create`

#### Sample Request Body

```json
{
  "email": "monti.amro1556@themaster.com",
  "password": "thegreatest"
}
```

#### Sample Response

```json
{
  "status": "success",
  "code": 201,
  "message": "User created successfully",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjA0ZjQxYjU1NjQwMWM2NmZlYjQ2N2JkIiwiaWF0IjoxNjE1ODA2OTAxfQ.VuGKbDiSPbvI5sF5Px1M-E6DWRjjFMCDYow0-USO6yw",
    "subdomainId": "604f41b556401c66feb467be",
    "subdomainIdPreview": "604f41b556401c66feb467bf"
  }
}
```

### Login

`POST /users/login`

#### Sample Request Body

```json
{
  "email": "monti@themaster.com",
  "password": "thegreatest"
}
```

#### Sample Response

###### Correct Credential

```json
{
  "status": "success",
  "code": 200,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGXxXxXxXxXxXxXxXxXxXxXxIkpXVCJ9.eyJ1c2VyXXxXxXxXxXxXxXxXxXxXxXxxxxxxxxxxx1Mzk1MTkyfQ.pq98j97ZwaBXxXxXxXxXxXxXxXxXxXxXxcIR6PJT9VY"
  }
}
```

###### Wrong email

```json
{
  "code": 401,
  "message": "User does not exist"
}
```

###### Wrong password

```json
{
  "code": 400,
  "message": "Invalid Password"
}
```

## Get Info

`GET /users/account`

#### Sample Request

Authorization token in header

#### Sample Response

```json
{
  "status": "success",
  "code": 200,
  "message": "Successfully found user",
  "data": {
    "userEmail": "anotheranother1@tesfafddadft1affadsfdfdasff1a.com",
    "subdomains": [
      {
        "galleries": [],
        "_id": "604f41b556401c66feb467be",
        "name": "anotheranother1-bprwbuvhc"
      },
      {
        "about": {
          "tagline": "Your tagline",
          "description": "Your description"
        },
        "contact": {
          "address": {
            "street_and_number": "Your street 100",
            "postalcode": "10999",
            "city": "Your city",
            "country": "Your country"
          },
          "first_name": "Your first name",
          "last_name": "Your last name",
          "phone_number": "Your phone number",
          "business_email": "Your email address",
          "contact_tagline": "Your tagline"
        },
        "galleries": [],
        "_id": "604f41b556401c66feb467bf",
        "name": "anotheranother1-bprwbuvhc-preview",
        "page_title": "Your page title"
      }
    ]
  }
}
```

## Update email

`PATCH /users/account`

#### Sample Request

```json
{
  "email": "monti@thefool.com"
}
```

#### Sample Response

```json
{
  "status": "success",
  "code": 204,
  "message": "successfully updated email",
  "data": {
    "user": "monti@thefool.com"
  }
}
```

------ Subdomains --------

### Create Subdomain

`POST /subdomains/create`

#### Important headers

Make sure to include:

```json
{
    "Authorization": Token
    "Content_Type": "Application/jason"
}
```

#### Sample Request Body

```json
{
  "about": {
    "tagline": "My Hallo",
    "description": "Spank me one more time"
  },
  "contact": {
    "address": {
      "street_and_number": "sample street 100",
      "postalcode": "10000",
      "city": "Berlin",
      "country": "Germany"
    },
    "first_name": "Bondage",
    "last_name": "Queen",
    "contact_tagline": "Calle me Baby",
    "business_email": "thorny.vibes@bondage.com",
    "phone_number": "+4917641855555"
  },
  "name": "Thorny Vibes",
  "theme": "Bitchy",
  "page_title": "Home"
}
```

#### Sample Response

```json
{
  "status": "success",
  "code": 201,
  "message": "Successfully created subdomain Thorny Vibes",
  "data": {
    "contact": {
      "address": {
        "street_and_number": "sample street 100",
        "postalcode": "10000",
        "city": "Berlin",
        "country": "Germany"
      },
      "first_name": "Bondage",
      "last_name": "Queen",
      "contact_tagline": "Calle me Baby",
      "business_email": "thorny.vibes@bondage.com",
      "phone_number": "+4917641855555"
    },
    "galleries": [],
    "_id": "6047582ce1fda32b9f753ec8",
    "about": {
      "tagline": "My Hallo",
      "description": "Spank me one more time"
    },
    "name": "Thorny Vibes",
    "theme": "Bitchy",
    "page_title": "Home"
  }
}
```

### Update Subdomain

`PATCH /subdomains/:id`

#### Sample Request Body

```json
{
  "name": "Brand new subdomain",
  "theme": "Cool",
  "page_title": "Business",
  "about": {
    "tagline": "Hola Amigos"
  },
  "contact": {
    "address": {
      "postalcode": "10000"
    },
    "contact_tagline": "Call me biatch"
  }
}
```

#### Sample Response

```json
{
  "status": "success",
  "code": 204,
  "message": "Successfully updated Brand new subdomain",
  "data": {
    "about": {
      "tagline": "Hola Amigos",
      "description": "Spank me one more time"
    },
    "contact": {
      "address": {
        "street_and_number": "sample street 100",
        "postalcode": "10000",
        "city": "Berlin",
        "country": "Germany"
      },
      "first_name": "Bondage",
      "last_name": "Queen",
      "contact_tagline": "Call me biatch"
    },
    "galleries": [],
    "_id": "604641bc7a437a646f13d1de",
    "name": "Brand new subdomain",
    "theme": "Cool",
    "page_title": "Business"
  }
}
```

### Find a Subdomain

`GET /subdomains/:subdomainId`
`GET /subdomains/603d175719c620e277ccf11c`

#### Sample Response

```json
{
  "status": "success",
  "code": 200,
  "message": "Found subdomain successfully",
  "data": {
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
      "galleries": ["604617a6e79bf843e16aa577", "604617d7243911441eac359f"],
      "_id": "603d175719c620e277ccf11c",
      "name": "jasmin",
      "theme": "black",
      "gallaries": ["603e1b4f5f454a7ae6c191dd"],
      "contact_tagline": "Please buy my crap"
    },
    "galleries": [
      {
        "images": [],
        "_id": "604617a6e79bf843e16aa577",
        "name": "New Gallery"
      },
      {
        "images": [],
        "_id": "604617d7243911441eac359f",
        "name": "New Gallery 2"
      }
    ]
  }
}
```

### Find a Subdomain by name

`GET /subdomains/names/:name`

#### Sample Response

```json
{
  "status": "success",
  "code": 200,
  "message": "Found subdomain successfully",
  "data": {
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
      "galleries": ["604617a6e79bf843e16aa577", "604617d7243911441eac359f"],
      "_id": "603d175719c620e277ccf11c",
      "name": "jasmin",
      "theme": "black",
      "gallaries": ["603e1b4f5f454a7ae6c191dd"],
      "contact_tagline": "Please buy my crap"
    },
    "galleries": [
      {
        "images": [],
        "_id": "604617a6e79bf843e16aa577",
        "name": "New Gallery"
      },
      {
        "images": [],
        "_id": "604617d7243911441eac359f",
        "name": "New Gallery 2"
      }
    ]
  }
}
```

### Check Subdomain name availability

`GET /subdomains/available/:name`
`GET /subdomains/available/jasmin`

#### Sample Response

```
{
    "message": "The name jasmin is not available",
    "isAvailable": false
}
```

OR

```
{
    "message": "The name jasmin is available",
    "isAvailable": true
}
```

### Publish Subdomain

`GET /subdomains/publish/:previewSubdomainid`

#### Sample Response

```
{
  "status": "success",
  "code": 200,
  "message": "Successfully published anotheranother1-bprwbuvhc"
}
```

------ Gallery --------

### Create a Gallery

`POST /galleries/create`

#### Sample Request Body

```json
{
  "name": "My Photographs",
  "subdomainId": "603d175719c620e277ccf11c"
}
```

#### Sample Response

```json
{
  "status": "success",
  "code": 201,
  "message": "Gallery created successfully and added to jasmin",
  "data": {
    "images": [],
    "_id": "604642eb7a437a646f13d1df",
    "name": "Awesome Gallery"
  }
}
```

### Find a Gallery

`GET /galleries/:galleryId`
`GET /galleries/6044b9139352920b3cdd42ae`

#### Sample Response

```json
{
  "status": "success",
  "code": 200,
  "message": "Found gallery successfully",
  "data": {
    "gallery": {
      "images": [
        "6044e17bb8c5d52f4a029239",
        "6044e33c9cb96e31dbc00756",
        "6044e3b3315e37325defff9e",
        "6044e5fbce77ad35236a3b8e",
        "6044e603ce77ad35236a3b8f"
      ],
      "_id": "6044b9139352920b3cdd42ae",
      "name": "Testing now 3"
    },
    "images": [
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
}
```

### Find a Gallery by Gallery name

`GET /galleries/names/:name`
`GET /galleries/names/festival`

#### Sample Response

```json
{
  "status": "success",
  "code": 200,
  "message": "Found gallery successfully",
  "data": {
    "gallery": {
      "images": [
        "6044e17bb8c5d52f4a029239",
        "6044e33c9cb96e31dbc00756",
        "6044e3b3315e37325defff9e",
        "6044e5fbce77ad35236a3b8e",
        "6044e603ce77ad35236a3b8f"
      ],
      "_id": "6044b9139352920b3cdd42ae",
      "name": "festival"
    },
    "images": [
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
}
```

### Update Gallery Name

`PATCH /galleries/:id`

#### Sample Request Body

```json
{
  "name": "The Best Gallery in the world"
}
```

#### Sample Response

```json
{
  "status": "success",
  "code": 200,
  "message": "Name updated successfully",
  "data": {
    "images": [
      "6044e17bb8c5d52f4a029239",
      "6044e33c9cb96e31dbc00756",
      "6044e3b3315e37325defff9e",
      "6044e5fbce77ad35236a3b8e",
      "6044e603ce77ad35236a3b8f"
    ],
    "_id": "6044b9139352920b3cdd42ae",
    "name": "The Best Gallery in the world"
  }
}
```

### Delete a gallery

`DELETE /galleries/:id`

#### Sample Response

```json
{
  "status": "success",
  "code": 204,
  "message": "Successfuly deleted Awesome Gallery"
}
```

------ Image --------

### Upload Image

`POST /images/upload`

#### Sample Request Body (Form-Data)

```json
{
  "image": "image-file.png",
  "title": "Introvaerts Logo test 3",
  "media": "logo",
  "year": 2021,
  "dimensions": "200 x 200",
  "alt_text": "Introvaerts Logo",
  "description": "This is the logo for our startup",
  "gallery_id": "6044b9139352920b3cdd42ae"
}
```

#### Sample Response

```json
{
  "status": "success",
  "code": 201,
  "message": "Successfully uploaded image and added to The Best Gallery in the world",
  "data": {
    "_id": "604643dc7a437a646f13d1e0",
    "caption": {
      "title": "Introvaerts Logo test 3",
      "media": "logo",
      "year": 2021,
      "dimensions": "200 x 200"
    },
    "alt_text": "Introvaerts Logo",
    "description": "This is the logo of our startup",
    "image_url": "https://introvearts.s3.amazonaws.com/6044b9139352920b3cdd42ae/1615217628118.png"
  }
}
```

### Get one Image

GET /images/:id

#### Sample Response

```json
{
  "status": "success",
  "code": 200,
  "message": "Found image successfuly",
  "data": {
    "caption": {
      "title": "Our Logo",
      "media": "logo",
      "year": 2021,
      "dimensions": "200 x 200"
    },
    "_id": "60487de10eb3050815a82195",
    "alt_text": "Introvaerts Logo",
    "description": "This is the logo of our startup",
    "image_url": "https://introvearts.s3.amazonaws.com/60487c5da696095204ef991c/1615363553392.png"
  }
}
```

### Delete Image

`DELETE /images/:id`

#### Sample Response

```json
{
  "status": "success",
  "code": 204,
  "message": "Image successfully deleted"
}
```
