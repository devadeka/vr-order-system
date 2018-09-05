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
      response_items = JSON.parse(response.body)
      expect(response_items.length).to eq(@items.length)
    end

    it 'returns item with the right content' do
      get :index
      body = JSON.parse(response.body)

      response_item = body[0]
      expected_item = @items[0]
      
      expect(response_item['name']).to eq(expected_item.name)
      expect(response_item['description']).to eq(expected_item.description)
      expect(response_item['price']).to eq(expected_item.price)
    end

    it 'returns all items with the right content as JSON' do
      get :index
      response_items = JSON.parse(response.body)
      expected_items = JSON.parse(@items.to_json)
      
      expect(response_items).to eq(expected_items)
    end

    it 'returns empty if table is empty' do
      #provide front end check for this
      Item.destroy_all
      get :index
      response_items = JSON.parse(response.body)
      expected_items = []
      
      expect(response_items).to eq(expected_items)
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

      response_item = JSON.parse(response.body)
      expected_item = JSON.parse(@item.to_json)

      expect(response_item).to eq(expected_item)
    end

    it 'returns 404 if no item found' do
      params = {id: 1}
      get :show, params: params

      response_status = response.status
      expected_status = 404

      expect(response_status).to eq(expected_status)
    end

    after do
      Item.destroy_all
    end
  end
end
