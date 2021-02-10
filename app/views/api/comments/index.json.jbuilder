@comments.each do |comment|
  json.set! comment.id do
    json.id comment.id
    json.content comment.content
    json.commenter comment.user
    json.createdAt comment.created_at
    json.article comment.article
  end
end
