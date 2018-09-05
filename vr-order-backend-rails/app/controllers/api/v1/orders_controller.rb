module Api
  module V1
    class OrdersController < ApplicationController
      include OrdersHelper
      def create
        if params[:items].nil?
          
          render :json => {:error => "no items associated with order"}.to_json, :status => 404

        else

          order = Order.create!(
            name: params[:name],
            address: params[:address],
            shipping_fee: 30,
            discount_multiplier: 1.0,
            total_price: 50
          )

          order_items = get_items_of_order(params[:items])

          order.shipping_fee = get_order_shipping_price(order_items)
          order.discount_multiplier = get_discount_multiplier(order_items)
          order.total_price = (getItems_total_price(order_items) +
            order.shipping_fee) * order.discount_multiplier

          order.items = order_items

          order.save

          render :json => {id: order.id}

        end
      end

      def show
        begin
          order = Order.find(params[:id])
          order_json = JSON.parse(order.to_json)
          p order.items.to_ary
          order_json[:items] = get_item_quantity_JSON(order.items.to_ary)
          render json: order_json
        rescue Exception => error
          render :json => {:error => error}.to_json, :status => 404
        end
      end
    end
  end
end