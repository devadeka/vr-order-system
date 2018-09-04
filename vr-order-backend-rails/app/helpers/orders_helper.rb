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


end
