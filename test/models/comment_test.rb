require 'test_helper'

class CommentTest < ActiveSupport::TestCase
  test 'comment should belongs to an article' do
    user = User.create({ username: 'test' })
    comment = Comment.new({ content: 'valid content', user_id: user.id })
    assert_not comment.save, 'comment should belongs to an article'
  end

  test 'comment should have a body' do
    user = User.create({ username: 'test' })
    article = Article.create({ user_id: user.id, title: 'valid title', body: 'valid body' })
    comment = Comment.new({ user_id: user.id, article_id: article.id })
    assert_not comment.save, 'comment should have a body'
  end

  test 'comment should belongs to a user' do
    user = User.create({ username: 'test' })
    article = Article.create({ user_id: user.id, title: 'valid title', body: 'valid body' })
    comment = Comment.new({ content: 'valid content', article_id: article.id })
    assert_not comment.save, 'comment should have a body'
  end

  test 'should pass the test' do
    user = User.create({ username: 'test' })
    article = Article.create({ user_id: user.id, title: 'valid title', body: 'valid body' })
    comment = Comment.new({ content: 'valid content', article_id: article.id, user_id: user.id })
    assert comment.save, 'comment should have a body'
  end
  test 'should pass the update test' do
    user = User.create({ username: 'test' })
    article = Article.create({ user_id: user.id, title: 'valid title', body: 'valid body' })
    comment = Comment.create({ content: 'valid content', article_id: article.id, user_id: user.id })
    assert comment.update!({ content: 'valid', article_id: article.id, user_id: user.id }), 'comment should be updated'
  end
end
