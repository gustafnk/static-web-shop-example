# Static web shop example

This is an example of serving a (very) simple web shop with static files, while transcluding a shopping cart from another server.

The source code for the shopping cart is located here: <https://github.com/gustafnk/static-web-shop-example-shopping-cart>

Techniques used:

- [jquery-pjax](https://github.com/defunkt/jquery-pjax)
- [h-include](https://github.com/gustafnk/h-include)
- h-include refresher (currently only in this repo)

## To run

`npm install`

`npm start`

## To build

`npm install`

`npm run compile`

## Configuration

To change the host of the shopping cart, see `harp.json`.