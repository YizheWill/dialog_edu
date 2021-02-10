require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test 'user should have a username' do
    user = User.new({})
    assert_not user.save, 'need a username'
  end

  test 'username cannot be longer than 20 chars' do
    user = User.new({ username: 'tasdfasdfasdfkjasldfjalsdfjlasdjfest' })
    assert_raises(ActiveRecord::RecordInvalid) { user.save! }
  end
  test 'should pass user creation test' do
    user = User.new({ username: 'valid_name' })
    assert user.save!
  end
end
