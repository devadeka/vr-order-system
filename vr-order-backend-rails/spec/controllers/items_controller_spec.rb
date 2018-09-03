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
      responseItems = JSON.parse(response.body)
      expect(responseItems.length).to eq(@items.length)
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
      responseItems = JSON.parse(response.body)
      expectedItems = JSON.parse(@items.to_json)
      
      expect(responseItems).to eq(expectedItems)
    end

    it 'returns empty if table is empty' do
      #provide front end check for this
      Item.destroy_all
      get :index
      responseItems = JSON.parse(response.body)
      expectedItems = []
      
      expect(responseItems).to eq(expectedItems)
    end

    after do
      Item.destroy_all
    end
  end

  describe 'GET /api/v1/items/:id' do

    before do
      Item.destroy_all
      @item = Item.create!({name:"WAVR-XL Glasses", description:"This is the extra large version of the glasses", price:45})
    end

    it 'returns item given an id' do
      params = {id: @item.id}
      get :show, params: params 

      responseItem = JSON.parse(response.body)
      expectedItem = JSON.parse(@item.to_json)

      expect(responseItem).to eq(expectedItem)
    end

    it 'returns 404 if no item found' do
      params = {id: 1}
      get :show, params: params 

      responseStatus = response.status
      expectedStatus = 404

      expect(responseStatus).to eq(expectedStatus)
    end

    after do
      Item.destroy_all
    end
  end
end
