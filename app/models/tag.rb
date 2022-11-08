class Tag < ApplicationRecord

    validates :name, presence: true

    has_many :tag_links
    has_many :tagged, through: :tag_links, polymorphic: true
end
