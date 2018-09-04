require 'rails_helper'

RSpec.describe Item, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  
  it "is valid with valid attributes" do
    item = Item.new(
      name:"WAVR-XL Glasses", 
      description:"This is the extra large version of the glasses", 
      price:10)
    expect(item).to be_valid
  end

  it "is not valid with a negative price" do
    item = Item.new(
      name: "WAVR-XL Glasses", 
      description: "This is the extra large version of the glasses", 
      price: -10)
    expect(item).to be_invalid
  end

  it "is not valid without a name" do
    item = Item.new(
      name: nil, 
      description:"This is the extra large version of the glasses", 
      price: 10)
    expect(item).to be_invalid
  end

  it "is valid without a description" do
    item = Item.new(
      name:"WAVR-XL Glasses", 
      description: nil, 
      price: 10)
    expect(item).to be_valid
  end

end
