class Order < ApplicationRecord
  has_many :order_items
  has_many :items, through: :order_items

  validates :name, presence: true
  validates :address, presence: true
  validates :shipping_fee, presence: true
  validates :shipping_fee, :numericality => { :greater_than_or_equal_to => 0 }
  validates :discount_multiplier, presence: true
  validates :discount_multiplier, :numericality => { :greater_than_or_equal_to => 0 }
  validates :discount_multiplier, :numericality => { :less_than_or_equal_to => 1 }
  validates :total_price, presence: true
  validates :total_price, :numericality => { :greater_than_or_equal_to => 0 }
end
