class SpellBook < ApplicationRecord

    validates :user_id, presence: true
    validates :name, presence: true
    
    belongs_to :user
    has_many :spells
    has_many :tag_links, as: :tagged, dependent: :destroy
    has_many :tags, through: :tag_links
end
