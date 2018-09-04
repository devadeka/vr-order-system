module Api
  module V1
    class OrdersController < ApplicationController
      include OrdersHelper
      def create
        if params[:items]==nil
          render :json => {:error => "no items associated with order"}.to_json, :status => 404
        else
          order = Order.create!(
                          name: params[:name], 
                          address: params[:address],
                          shipping_fee: 30,
                          discount_multiplier: 1.0,
                          total_price: 50
                        )

          orderItems = getItemsOfOrderFromId(params[:items])
          order.items = orderItems
          
          order.save

          render :json => {id: order.id}
        end
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

