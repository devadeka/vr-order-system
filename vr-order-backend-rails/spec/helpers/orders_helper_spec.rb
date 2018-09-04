require 'rails_helper'

# Specs in this file have access to a helper object that includes
# the OrdersHelper. For example:
#
# describe OrdersHelper do
#   describe "string concat" do
#     it "concats two strings with spaces" do
#       expect(helper.concat_strings("this","that")).to eq("this that")
#     end
#   end
# end
RSpec.describe OrdersHelper, type: :helper do

  describe 'getItemsTotalPrice' do
    before do
      Item.destroy_all

      @items = Item.create!([
        {name:"WAVR-XS Glasses", description:"This is the extra small version of the glasses", price:5},
        {name:"WAVR-SM Glasses", description:"This is the small version of the glasses", price:15},
        {name:"WAVR-MD Glasses", description:"This is the medium  version of the glasses", price:25},
        {name:"WAVR-LG Glasses", description:"This is the large version of the glasses", price:35},
        {name:"WAVR-XL Glasses", description:"This is the extra large version of the glasses", price:45},
      ])
    end

    it 'gives the total price of items' do
      totalPrice = getItemsTotalPrice(@items)
      expect(totalPrice).to eq(125)
    end

    after do
      Item.destroy_all
    end
  end

  describe 'getOrderShippingPrice' do
    before do
      Item.destroy_all
      @items = Item.create!([
        {name:"WAVR-XS Glasses", description:"This is the extra small version of the glasses", price:5}
      ] * 30)
    end

    it 'gives the shipping fee' do
      shippingPrice = getOrderShippingPrice(@items[0..5])
      expect(shippingPrice).to eq(30)
    end

    it 'gives free shipping' do
      shippingPrice = getOrderShippingPrice(@items)
      expect(shippingPrice).to eq(0)
    end

    after do
      Item.destroy_all
    end
  end

  describe 'getDiscountMultiplier' do
    before do
      Item.destroy_all
      @items = Item.create!([
        {name:"WAVR-XS Glasses", description:"This is the extra small version of the glasses", price:5}
      ] * 30)
    end
    
    it 'gives no discount' do
      discount = getDiscountMultiplier(@items[0..5])
      expect(discount).to eq(1)
    end

    it 'gives discount' do
      discount = getDiscountMultiplier(@items)
      expect(discount).to eq(0.9)
    end

    after do
      Item.destroy_all
    end
  end

end
