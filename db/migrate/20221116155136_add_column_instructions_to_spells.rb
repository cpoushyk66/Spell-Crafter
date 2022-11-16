class AddColumnInstructionsToSpells < ActiveRecord::Migration[7.0]
  def change
    add_column :spells, :instructions, :text
  end
end
