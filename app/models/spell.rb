class Spell < ApplicationRecord

    validates :name, presence: true
    validates :spell_book_id, presence: true
    
    belongs_to :spell_book
    has_many :ingredients

    has_many :tag_links, as: :tagged, dependent: :destroy
    has_many :tags, through: :tag_links
    
end
