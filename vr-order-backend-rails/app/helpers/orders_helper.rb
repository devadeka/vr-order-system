module OrdersHelper
  require 'set'
  def get_items_of_order(posted_item_list)
    item_list = []
    posted_item_list.each do |posted_item|
      posted_item[:quantity].to_i.times do
        itemList << Item.find(posted_item[:item][:id])
      end
    end
    return item_list
  end

  def get_items_total_price(order_items)
    total_price = 0
    order_items.each do |item|
      total_price += item.price
    end
    return total_price
  end

  def get_order_shipping_price(order_items)
    minimum_free_shipping_quantity = 10
    flat_rate_shipping_price = 30
    
    return order_items.length < minimum_free_shipping_quantity ? flat_rate_shipping_price : 0
  end

  def get_discount_multiplier(order_items)
    minimum_discount_quantity = 20
    discount_multiplier = 0.9 #discountedPrice = total_price * discount_multiplier    
    
    return order_items.length > minimum_discount_quantity ? discount_multiplier : 1
  end

  def get_item_quantity_JSON(items)
    unique_items = items.to_set
    items_list = []
    unique_items.each do |item|
      items_list << {item: item, quantity: items.count(item)}
    end
    return JSON.parse(items_list.to_json)
  end

end
