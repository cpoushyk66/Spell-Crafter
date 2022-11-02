class CreateComponents < ActiveRecord::Migration[7.0]
  def change
    create_table :components do |t|
      t.string :name, null: false
      t.string :gender
      t.string :planet
      t.string :element
      t.string :parts_used
      t.text :notes

      t.timestamps
    end
  end
end
