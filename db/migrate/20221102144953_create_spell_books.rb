class CreateSpellBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :spell_books do |t|
      t.integer :user_id
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
