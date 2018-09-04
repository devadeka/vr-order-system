require 'rails_helper'

RSpec.describe Order, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  it "is valid with valid attributes" do
    order = Order.new(
      name:"P Sherman", 
      address:"42 Wallaby Way, Sydney, Australia", 
      shipping_fee:30,
      discount_multiplier:1.0)
    expect(order).to be_valid
  end

  it "is not valid without a name"
  it "is not valid without an address"
  it "is not valid without a shipping fee"
  it "is not valid with a negative shipping fee"
  it "is not valid without a discount multiplier"
  it "is not valid with a negative discount multiplier"
  it "is not valid with a discount multiplier more than 1"
end
