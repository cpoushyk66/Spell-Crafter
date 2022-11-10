class AddOriginalPosterNameToSpell02 < ActiveRecord::Migration[7.0]
  def change
    add_column :spells, :original_poster_id, :integer, null: false, default: 1
  end
end
