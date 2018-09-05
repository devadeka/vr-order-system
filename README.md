# **VR Order Coding Challenge**

## **Problem Statement**
Create a product ordering website that allows the user to order any of the company's VR related products. Should the number of items exceed 10, the whole order will have free shipping. Should the number of items exceed 20, the whole order will have a further 10% discount.

## **Assumptions, Limitations and  Future Work**
This application will not deal with user logins or verification. Instead the user will be reqiuired to enter their details when checking out. 

For safety/security purposes, the discounts will be stored server side and the price discount will also be applied server side.

For convenience, CORS has been set so that it accepts requests from any origin. This would need to be restricted in future.

For simplicity sake, the API will provision for but will not test the following features:
- Pagination: frontend will only request the first 10 items
- API versionsing: currently only V1, will not create a second version to test
- Sort order for items on sale: currently only request in order of item id
- Webpack: is currently not being used and so the application is not being hosted
- Status response: error codes sent via api will not be incorporated via frontend into message


## **Technologies**
|Frontend         |Backend       |
|-----------------|--------------|
|Node.js          |Ruby on Rails |
|React            |Postgres      |
|MaterialUI React |Rails-Rspec   |
|GitHub Pages     |Heroku        |



## **Database Design**

|Order               |Item       |OrderIem|
|--------------------|-----------|--------|
|ID                  |ID         |ID      |
|CustomerName        |Name       |OrderID |
|CustomerAddress     |Description|ItemID  |
|ShippingFee         |Price      |        |
|DiscountMultiplier  |           |        |

## **Running the Code**
Clone the github repo.

## *Frontend*
Install NPM modules using:

    npm install

Run frontend server on http://localhost:3061 using:

    npm start

## *Backend*
Install Ruby gems using:

    bundle install

Setup databse:

    rails db:migrate
    rails db:seed

Run serve server on http://localhost:3000 using:

    rails s

Run tests using:

    rspec spec
