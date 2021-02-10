require 'test_helper'

class ArticleTest < ActiveSupport::TestCase
  test 'article should have title' do
    user = User.create({ username: 'test' })
    article = Article.new({ body: 'this is the test body', user_id: user.id })
    assert_not article.save, 'article should have a title'
  end

  test 'update article should have title longer than 10' do
    user = User.create({ username: 'test' })
    article = Article.create({ title: 'valid title', body: 'this is the test body', user_id: user.id })
    assert_not article.update({ title: '', body: 'valid body', user_id: user.id })
  end

  test 'update article should have a body' do
    user = User.create({ username: 'test' })
    article = Article.create({ title: 'valid title', body: 'this is the test body', user_id: user.id })
    assert_not article.update({ title: '', user_id: user.id })
  end

  test 'article should have a body' do
    user = User.create({ username: 'test' })
    article = Article.new({ title: 'this is a valid title', user_id: user.id })
    assert_not article.save, 'article shoud have a body'
  end

  test 'article should have an author' do
    article = Article.new({ title: 'this is a valid title', body: 'this is a valid body' })
    assert_not article.save, 'article should have an author'
  end

  test 'article title should be longer than 10' do
    user = User.create({ username: 'test' })
    article = Article.new({ title: 'abc', body: 'this is a valid body', user_id: user.id })
    assert_not article.save, 'article should have a title longer than 10 chars'
  end

  test 'should pass article create' do
    user = User.create({ username: 'test' })
    article = Article.new({ title: 'abcdefghijkl', body: 'this is a valid body', user_id: user.id })
    assert article.save!
  end
  test 'should pass article update' do
    user = User.create({ username: 'test' })
    article = Article.create({ title: 'abcdefghijkl', body: 'this is a valid body', user_id: user.id })
    assert article.update!({ user_id: user.id, title: 'valid title', body: 'valid body' })
  end
end
