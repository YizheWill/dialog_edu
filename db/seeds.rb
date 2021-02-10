# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do
  username = Faker::Name.unique.name
  User.create({ username: username })
end

30.times do
  title = Faker::Book.title
  body = Faker::Books::Lovecraft.paragraph(sentence_count: 5, random_sentences_to_add: 1)
  Article.create({ title: title, body: body, user_id: (1..10).to_a.sample })
end

70.times do
  content = Faker::Movies::HitchhikersGuideToTheGalaxy.marvin_quote
  Comment.create({ content: content, user_id: (1..10).to_a.sample, article_id: (1..30).to_a.sample })
end
