module Api
  module V1
    class ItemsController < ApplicationController

      def index
        render json: Item.all
      end

      def show
        begin
          item = Item.find(params[:id])
          render json: item
        rescue Exception => error
          render :json => {:error => error}.to_json, :status => 404
        end
      end

    end        
  end
end

