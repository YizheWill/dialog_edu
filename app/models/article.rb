class Article < ApplicationRecord
  validates :title, presence: true
  validates :body, presence: true
  validates :title, length: { minimum: 10 }

  belongs_to :user
  has_many :comments, :dependent => :destroy
end
