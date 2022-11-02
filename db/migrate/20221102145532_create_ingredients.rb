class CreateIngredients < ActiveRecord::Migration[7.0]
  def change
    create_table :ingredients do |t|
      t.string :quantitiy
      t.string :purpose
      t.text :instructions
      t.integer :spell_id
      t.integer :component_id

      t.timestamps
    end
  end
end
