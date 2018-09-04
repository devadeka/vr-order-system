module Api
  module V1
    class OrdersController < ApplicationController

      def create
        order = Order.create!(
                        name: params[:name], 
                        address: params[:address],
                        shipping_fee: 30,
                        discount_multiplier: 1.0,
                        total_price: 50
                      )

        params[:items].each do |item|
          item["quantity"].to_i.times{
            OrderItem.create!(order: order, item: Item.find(item["id"].to_i))
          }
        end

        render :json => {id: order.id}
      end

      def show
        begin
          item = Item.find(params[:id])
          render json: item
        rescue
          render :json => {:error => "not-found"}.to_json, :status => 404
        end  
      end

    end        
  end
end

