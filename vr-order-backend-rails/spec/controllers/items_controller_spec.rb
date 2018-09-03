require 'rails_helper'

RSpec.describe Api::V1::ItemsController, type: :controller do
  describe 'GET /api/v1/items' do

    before do
      Item.destroy_all
      Item.create!([
        {name:"WAVR-XS Glasses", description:"This is the extra small version of the glasses"},
        {name:"WAVR-SM Glasses", description:"This is the small version of the glasses"},
        {name:"WAVR-MD Glasses", description:"This is the medium  version of the glasses"},
        {name:"WAVR-LG Glasses", description:"This is the large version of the glasses"},
        {name:"WAVR-XL Glasses", description:"This is the extra large version of the glasses"},
      ])
    end

    it 'returns all items' do
      get('/api/v1/items')
      json = JSON.parse
    end

    after do
      Item.destroy_all
      Item.create!([
        {name:"WAVR-XS Glasses", description:"This is the extra small version of the glasses"},
        {name:"WAVR-SM Glasses", description:"This is the small version of the glasses"},
        {name:"WAVR-MD Glasses", description:"This is the medium  version of the glasses"},
        {name:"WAVR-LG Glasses", description:"This is the large version of the glasses"},
        {name:"WAVR-XL Glasses", description:"This is the extra large version of the glasses"},
      ])
    end
  end
end
