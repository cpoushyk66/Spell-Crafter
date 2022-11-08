class CreateSpells < ActiveRecord::Migration[7.0]
  def change
    create_table :spells do |t|
      t.string :name, null: false
      t.integer :spell_book_id
      t.text :description

      t.timestamps
    end
  end
end
