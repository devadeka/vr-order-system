# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

OrderItem.destroy_all
Item.destroy_all
Order.destroy_all

@items = Item.create!([
  {name:"WAVR-XS Glasses", description:"This is the extra small version of the glasses", price:5},
  {name:"WAVR-SM Glasses", description:"This is the small version of the glasses", price:15},
  {name:"WAVR-MD Glasses", description:"This is the medium  version of the glasses", price:25},
  {name:"WAVR-LG Glasses", description:"This is the large version of the glasses", price:35},
  {name:"WAVR-XL Glasses", description:"This is the extra large version of the glasses", price:45},
])
