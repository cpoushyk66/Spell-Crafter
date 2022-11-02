class Component < ApplicationRecord

    validates :name, presence: true

    has_many :ingredients
    has_many :spells, through: :ingredients
    has_many :tag_links, as: :tagged, dependent: :destroy
    has_many :tags, through: :tag_links
end
