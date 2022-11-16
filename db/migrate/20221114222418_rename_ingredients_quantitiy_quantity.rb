class RenameIngredientsQuantitiyQuantity < ActiveRecord::Migration[7.0]
  def change
    rename_column :ingredients, :quantitiy, :quantity
  end
end
