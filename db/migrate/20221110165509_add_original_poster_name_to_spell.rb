class AddOriginalPosterNameToSpell < ActiveRecord::Migration[7.0]
  def change
    add_column :spells, original_poster_id: :integer
  end
end
