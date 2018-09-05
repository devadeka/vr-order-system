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

          orderItems = getItemsOfOrder(params[:items])
          

          order.shipping_fee = getOrderShippingPrice(orderItems)
          order.discount_multiplier = getDiscountMultiplier(orderItems)
          order.total_price = ( getItemsTotalPrice(orderItems) + order.shipping_fee ) * order.discount_multiplier
          order.items = orderItems

          order.save

          render :json => {id: order.id}
        end
      end

      def show
        begin
          order = Order.find(params[:id])
          order_json = JSON.parse(order.to_json)
          p order.items.to_ary
          order_json[:items] = getItemQuantityJSON(order.items.to_ary)
          render json: order_json
        rescue Exception => error
          render :json => {:error => error}.to_json, :status => 404
        end  
      end

    end        
  end
end

