require 'rails_helper'

RSpec.describe Api::V1::ItemsController, type: :controller do
  describe 'GET /api/v1/items' do

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

    it 'returns all items' do
      get :index
      body = JSON.parse(response.body)
      expect(body.length).to eq(5)
    end

    it 'returns item with the right content' do
      get :index
      body = JSON.parse(response.body)

      responseItem = body[0]
      expectedItem = @items[0]
      
      expect(responseItem['name']).to eq(expectedItem.name)
      expect(responseItem['description']).to eq(expectedItem.description)
      expect(responseItem['price']).to eq(expectedItem.price)
    end

    it 'returns all items with the right content as JSON' do
      get :index
      body = JSON.parse(response.body)
      expectedItems = JSON.parse(@items.to_json)
      
      expect(body).to eq(expectedItems)
    end

    after do
      Item.destroy_all
    end
  end
end
