module ApplicationHelper
  def parse_to_JSON(obj)
    return JSON.parse(obj.to_json)
  end
end
