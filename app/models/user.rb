class User < ApplicationRecord
  validates_presence_of :username, on: :create, message: "can't be blank"
  validates_length_of :username, within: 1..20, on: :create
  has_many :articles
  has_many :comments
end
