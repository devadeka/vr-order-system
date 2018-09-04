require 'rails_helper'

RSpec.describe Api::V1::OrdersController, type: :controller do
  

  describe 'POST /api/v1/orders' do

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

    it 'creates an order and associates an item'
    it 'creates an order and associates mutliple items'
    it 'creates an order and associates multiple quantities of an item'
    it 'creates an order and associates multiple quantities of difrrent items'
    it 'returns an error and does not an order if not items are associated with the post'

    after do
      Item.destroy_all
    end
  
  end


end
