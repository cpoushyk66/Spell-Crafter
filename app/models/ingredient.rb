class Ingredient < ApplicationRecord

    validates :quantitiy, presence: true
    validates :purpose, presence: true
    validates :instructions, presence: true
    validates :spell_id, presence: true
    validates :component_id, presence: true

    belongs_to :spell
    belongs_to :component

end
