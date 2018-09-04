require 'rails_helper'

RSpec.describe Order, type: :model do
  it "is valid with valid attributes" do
    order = Order.new(
      name:"P Sherman", 
      address:"42 Wallaby Way, Sydney, Australia", 
      shipping_fee:30,
      discount_multiplier:1.0,
      total_price:50)
    expect(order).to be_valid
  end

  it "is not valid without a name" do
    order = Order.new(
      name:nil, 
      address:"42 Wallaby Way, Sydney, Australia", 
      shipping_fee:30,
      discount_multiplier:1.0,
      total_price:50)
    expect(order).to be_invalid
  end

  it "is not valid without an address" do
    order = Order.new(
      name:"P Sherman", 
      address:nil, 
      shipping_fee:30,
      discount_multiplier:1.0,
      total_price:50)
    expect(order).to be_invalid
  end

  it "is not valid without a shipping fee" do
    order = Order.new(
      name:"P Sherman", 
      address:"42 Wallaby Way, Sydney, Australia", 
      shipping_fee:nil,
      discount_multiplier:1.0,
      total_price:50)
    expect(order).to be_invalid
  end

  it "is not valid with a negative shipping fee" do
    order = Order.new(
      name:"P Sherman", 
      address:"42 Wallaby Way, Sydney, Australia", 
      shipping_fee:-30,
      discount_multiplier:1.0,
      total_price:50)
    expect(order).to be_invalid
  end

  it "is not valid without a discount multiplier" do
    order = Order.new(
      name:"P Sherman", 
      address:"42 Wallaby Way, Sydney, Australia", 
      shipping_fee:30,
      discount_multiplier:nil,
      total_price:50)
    expect(order).to be_invalid
  end

  it "is not valid with a negative discount multiplier" do
    order = Order.new(
      name:"P Sherman", 
      address:"42 Wallaby Way, Sydney, Australia", 
      shipping_fee:30,
      discount_multiplier:-1.0,
      total_price:50)
    expect(order).to be_invalid
  end

  it "is not valid with a discount multiplier more than 1.0" do
    order = Order.new(
      name:"P Sherman", 
      address:"42 Wallaby Way, Sydney, Australia", 
      shipping_fee:30,
      discount_multiplier:8.5,
      total_price:50)
    expect(order).to be_invalid
  end

  it "is not valid without a total price" do
    order = Order.new(
      name:"P Sherman", 
      address:"42 Wallaby Way, Sydney, Australia", 
      shipping_fee:30,
      discount_multiplier:0.9,
      total_price:nil)
    expect(order).to be_invalid
  end
  
  it "is not valid with a negative total price" do
    order = Order.new(
      name:"P Sherman", 
      address:"42 Wallaby Way, Sydney, Australia", 
      shipping_fee:30,
      discount_multiplier:0.9,
      total_price:-50)
    expect(order).to be_invalid
  end
end
