require 'rails_helper'

RSpec.describe Api::V1::OrdersController, type: :controller do
  

  describe 'POST /api/v1/orders' do

    before do
      OrderItem.destroy_all
      Item.destroy_all
      Order.destroy_all

      Item.create!([
        {name:"WAVR-XS Glasses", description:"This is the extra small version of the glasses", price:5},
        {name:"WAVR-SM Glasses", description:"This is the small version of the glasses", price:15},
        {name:"WAVR-MD Glasses", description:"This is the medium  version of the glasses", price:25},
        {name:"WAVR-LG Glasses", description:"This is the large version of the glasses", price:35},
        {name:"WAVR-XL Glasses", description:"This is the extra large version of the glasses", price:45},
      ])
      
      @items = Item.all
      @customer_name = "P Sherman"
      @customer_address = "42 Wallaby Way, Sydney Australia"
    
    end

    it 'creates an order and returns order id' do
      params = {
        name: @customer_name, 
        address: @customer_address,
        items: [
          {item: JSON.parse(@items[0].to_json), quantity:1}
        ]
      }
      
      post :create, params: params

      responseOrder = JSON.parse(response.body)
      expectedOrder = JSON.parse( {:id => Order.first.id}.to_json )

      expect(responseOrder).to eq(expectedOrder)
    end

    it 'creates an order and associates an item' do
      params = {
        name: @customer_name, 
        address: @customer_address,
        items: [
          {item: JSON.parse(@items[0].to_json), quantity:1}
        ]
      }
      
      post :create, params: params

      responseOrderId = JSON.parse(response.body)["id"]
      responseOrder = Order.find(responseOrderId)
      expect( responseOrder.items.length ).to eq(1)
    end


    it 'creates an order and associates mutliple items' do
      params = {
        name: @customer_name, 
        address: @customer_address,
        items: [
          {item: JSON.parse(@items[0].to_json), quantity:1},
          {item: JSON.parse(@items[1].to_json), quantity:1}
        ]
      }
      
      post :create, params: params

      responseOrderId = JSON.parse(response.body)["id"]
      responseOrder = Order.find(responseOrderId)

      expectedItems = [@items[0], @items[1]]

      expect(JSON.parse(responseOrder.items.to_json)).to eq(JSON.parse(expectedItems.to_json))
    end


    it 'creates an order and associates multiple quantities of an item' do
      params = {
        name: @customer_name, 
        address: @customer_address,
        items: [
          {item: JSON.parse(@items[0].to_json), quantity:5}
        ]
      }
      
      post :create, params: params

      responseOrderId = JSON.parse(response.body)["id"]
      responseOrder = Order.find(responseOrderId)

      expectedItems = [@items[0]] * 5

      expect(JSON.parse(responseOrder.items.to_json)).to eq(JSON.parse(expectedItems.to_json))
    end


    it 'creates an order and associates multiple quantities of diferrent items' do
      params = {
        name: @customer_name, 
        address: @customer_address,
        items: [
          {item: JSON.parse(@items[0].to_json), quantity:5},
          {item: JSON.parse(@items[1].to_json), quantity:1},
          {item: JSON.parse(@items[3].to_json), quantity:3}
        ]
      }
      
      post :create, params: params

      responseOrderId = JSON.parse(response.body)["id"]
      responseOrder = Order.find(responseOrderId)

      expectedItems = [
        [@items[0]] * 5,
        [@items[1]] * 1, 
        [@items[3]] * 3]

      expect(JSON.parse(responseOrder.items.to_json)).to eq(JSON.parse(expectedItems.flatten.to_json))
    end


    it 'returns an error if no items are associated with the post' do
      params = {
        name: @customer_name, 
        address: @customer_address,
        items: []
      }
      
      post :create, params: params

      responseStatus = response.status
      expectedStatus = 404

      expect(responseStatus).to eq(expectedStatus)
    end


    after do
      OrderItem.destroy_all
      Item.destroy_all
      Order.destroy_all
    end
  
  end


end
