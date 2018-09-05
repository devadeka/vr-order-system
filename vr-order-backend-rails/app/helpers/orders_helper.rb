module OrdersHelper
  require 'set'
  def getItemsOfOrder(postedItemList)
    itemList = []
    postedItemList.each do |postedItem|
      postedItem[:quantity].to_i.times do
        itemList << Item.find(postedItem[:item][:id])
      end
    end
    return itemList
  end

  def getItemsTotalPrice(orderItems)
    totalPrice = 0
    orderItems.each do |item|
      totalPrice += item.price
    end
    return totalPrice
  end

  def getOrderShippingPrice(orderItems)
    minimumFreeShippingQuantity = 10
    flatRateShippingPrice = 30
    
    return orderItems.length < minimumFreeShippingQuantity ? flatRateShippingPrice : 0
  end

  def getDiscountMultiplier(orderItems)
    minimumDiscountQuantity = 20
    discountMultiplier = 0.9 #discountedPrice = totalPrice * discountMultiplier    
    
    return orderItems.length > minimumDiscountQuantity ? discountMultiplier : 1
  end

  def getItemQuantityJSON(items)
    unique_items = items.to_set
    items_list = []
    unique_items.each do |item|
      items_list << {item: item, quantity: items.count(item)}
    end
    return JSON.parse(items_list.to_json)
  end

end
