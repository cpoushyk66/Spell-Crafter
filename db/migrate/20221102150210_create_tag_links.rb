class CreateTagLinks < ActiveRecord::Migration[7.0]
  def change
    create_table :tag_links do |t|
      t.integer :tag_id
      t.references :tagged, polymorphic: true, index: true

      t.timestamps
    end
  end
end
