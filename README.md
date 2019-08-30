# RESTful API Inventory App

![](https://img.shields.io/badge/Code%20Style-Standard-yellow.svg)
![](https://img.shields.io/badge/Dependencies-Express-green.svg)
![](https://img.shields.io/badge/License-ISC-yellowgreen.svg)

<p align="center">
  <a href="https://nodejs.org/">
    <img title="Restful API" src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>

----
## Table of contents
* [Prerequiste](#prerequiste)
* [Installation](#installation)
* [Documentation](#documentation)
* [License](#license)

## Prerequiste
- Node.js - Download and Install [Node.js](https://nodejs.org/en/) - Include NPM (Node Package Manager)
- MySQL - Download and Install [MySQL](https://www.mysql.com/downloads/) - Make sure it's running on the default port.
- Postman - Download and Install [Postman](https://www.getpostman.com/downloads) - Implementation with postman latest version.

## Installation
### Clone
```
$ git clone https://github.com/iamrezaaulia/RESTful-API-Inventory-App
$ cd inventory_app
$ npm install
```

### Create Environment Variable
```
$ cp .env_example .env
$ code .env
```

```
SERVER_PORT = YOUR-PORT

DB_HOST = 'YOU-DB-HOST'
DB_USER = 'YOUR-DB-USER'
DB_PASSWORD = 'YOUR-DB-PASSWORD'
DB_NAME = 'YOUR-DB-NAME'
```
### Start Development Server
```
$ npm start
```

## Untuk auto-reloading server

```
$ npm install -g nodemon
```

Tambahkan di `package.json` (disini memakai `app.js`)

```
{
    ...
    "scripts" : {
        "start": "nodemon app.js"
    }
    ...
}
```
Jalankan

```
$ npm start
```

## Documentation

### Products Routes

#### GET Request

 - "/api/products" => display all products, with default pagination {page:1, limit:5}. Query params:
    - search -> display all products with Name or Category that contains the keyword,
	- sortBy -> its value is name of column you want to sort,
    - sort -> its filtering your ascending or descending,
	- page -> page to display (default 1),
	- limit -> number of products displayed in a page (default 5).

 - "/api/products/:id" => display one products with id specified by using params:id.

#### POST Request

 - "/api/products" => Inserting a product to database using data:name, description, image, categories.id, quantity, created_at, and updated_at.
	- note -> image is the url to the image, not the actual image.
	- note -> categories.id is value number of you want to select category.

#### PATCH Request

 - "/api/products/:id/update/" => Updating a product in database using params:id and data:name, description, image, quantity.
 - "/api/products/:id/update/:action/:qty" => Updating quantity product in database using params:id, action:add/min, qty:number.
	- Exp -> "/api/products/1/update/add/2"
	- Exp -> "/api/products/1/update/min/2"

#### DELETE Request

 - "/api/products/delete/:id" => Deleting a product in database using params:id.

### Categories Routes

#### GET Request

 - "/api/categories" => Display all categories.
 - "/api/categories/:id" => Display one category with id specified by using params:id.


#### POST Request

 - "/api/categories" => Inserting a category to database using data: category.


#### PATCH Request

 - "/api/categories/:id/update" => Updating a category in database using params:id and data:category.


#### DELETE Request

 - "/api/categories/delete/:id" => Deleting a category in database using params:id.


### License
----
[ISC](https://en.wikipedia.org/wiki/ISC_license "ISC")
