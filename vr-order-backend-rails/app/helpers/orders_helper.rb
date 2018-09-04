module OrdersHelper

  def getItemsOfOrderFromId(itemIdList)
    itemList = []
    itemIdList.each do |item|
      item["quantity"].to_i.times do
        itemList << Item.find(item["id"])
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

end
