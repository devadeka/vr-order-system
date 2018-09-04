class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.string :name
      t.text :address
      t.float :shipping_fee
      t.float :discount_multiplier
      t.float :total_price

      t.timestamps
    end
  end
end
